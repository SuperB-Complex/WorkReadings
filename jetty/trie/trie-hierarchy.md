# Trie used in jetty

```java
public interface Trie<V> {}

public abstract class AbstractTrie<V> implements Trie<V> {}

public class TreeTrie<V> extends AbstractTrie<V> {}

public class ArrayTrie<V> extends AbstractTrie<V> {}

public class ArrayTernaryTrie<V> extends AbstractTrie<V> {}
```

[Trie](/code/Trie.java)

[AbstractTrie](/code/AbstractTrie.java)

[TreeTrie](/code/TreeTrie.java)

[ArrayTrie](/code/ArrayTrie.java)

[ArrayTernaryTrie](/code/ArrayTernaryTrie.java)

* Useful algorithm links:

    [Visualization](https://www.cs.usfca.edu/~galles/visualization/TST.html) of ternary trie

    ![ternary-trie-example](/pictures/jetty-trie-ternary-trie-visualization.png)

* Background information about these classes

    For our well known string (eg. HTTP header names and values) we initially implemented a simple [TreeTrie](/code/TreeTrie.java) that stored each character as a node object in a tree.   This was moderately fast, but it suffered from poor locality of reference as each character had to look up a new object that could be located anywhere in the heap.
    ![treetrie-fields](/pictures/treetrie-fields.png)

    Thus we developed an [ArrayTrie](/code/ArrayTrie.java) implementation that stores the tree as index references within a large char[].  This had the huge benefit that once the a portion of the char[] was loaded into cache for one character in the lookup, it is highly likely that subsequent character lookups are already in the cache.  This again gave us a significant boost in our micro benchmarks!

    The Trie abstraction was initially just used for looking up known strings such as “Host”, “Content-Type”, “User-Agent”, “Connection”, “close” etc. which is very useful as you parse a HTTP header token by token.  However, HTTP is a very repetitive protocol and for a given client you will frequently see well known combinations of tokens such as:

    ```http
    Connection: close
    Connection: keep-alive
    Accept-Encoding: gzip
    Accept: */*
    ```

    The simple parsing strategy is to look for ‘:’ and CRLF to identify tokens and then lookup those strings in the Trie.  But if you are able to look up the combinations of  tokens in a Trie, then the Trie you save effort parsing as well as being able to lookup shared instances of common fields (eg Connection: keep-alive).    Thus we modified our Trie interface to support a best match lookup that given the entire buffer will attempt to match an entire header line.

    For many well known fields combinations like the ones listed above, our [ArrayTrie](/code/ArrayTrie.java) was a good solution. While it is a bit memory hungry, the number of field combinations is not large, is statically known and is shared between all connections to the server.  But unfortunately, not all fields are well known in advance and some of the longest repeated fields look like:

    ```http
    User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:18.0) Gecko/20100101 Firefox/18.0
    Cookie: __utma=1598342155.164253763.123423536.1359602604.1359611604.283; __utmz=12352155.135234604.383.483.utmcsr=google.com.au|utmccn=(referral)|utmcmd=referral|utmcct=/ig; __utmc=4234112; __utmb=4253.1.10.1423
    Accept-Language: en-US,en;q=0.5,it;q=0.45
    ```

    Such fields are not statically know but will frequently repeat, either from the same client or from a class of client for a give period of time while a particular version is current.  Thus having a static field Trie is insufficient and we needed to be able to create dynamic per connection Tries to lookup such repeated fields.   [ArrayTrie](/code/ArrayTrie.java) worked, but is massively memory hungry and unsuitable to handle the hundreds of thousands of connections that Jetty can terminate.

    The theory of Tries suggested that a Ternary Tree is a good memory structure with regards to memory consumption, but the problem is that it gave up our locality of reference and worse still created a lot of node garbage as trees are built and discarded.   The solution is to combine the two approaches and we came up with our [ArrayTernaryTrie](/code/ArrayTernaryTrie.java), which is a ternary tree structure stored in a fixed size char[] (which also gives the benefit of protection from DOS attacks).  This data structure has proved quick to build, quick to lookup, efficient on memory and cheap to GC.  It’s another winner in the micro benchmarks.