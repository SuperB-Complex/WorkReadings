# [False Sharing](https://en.wikipedia.org/wiki/False_sharing)

In computer science, false sharing is a performance-degrading usage pattern that can arise in systems with distributed, coherent caches at the size of the smallest resource block managed by the caching mechanism. When a system participant attempts to periodically access data that will never be altered by another party, but those data share a cache block with data that are altered, the caching protocol may force the first participant to reload the whole unit despite a lack of logical necessity. The caching system is unaware of activity within this block and forces the first participant to bear the caching system overhead required by true shared access of a resource.

By far the most common usage of this term is in modern multiprocessor CPU caches, where memory is cached in lines of some small power of two word size (e.g., 64 aligned, contiguous bytes). If two processors operate on independent data in the same memory address region storable in a single line, the cache coherency mechanisms in the system may force the whole line across the bus or interconnect with every data write, forcing memory stalls in addition to wasting system bandwidth. False sharing is an inherent artifact of automatically synchronized cache protocols and can also exist in environments such as distributed file systems or databases, but current prevalence is limited to RAM caches.

1. [This queue is based on our BlockingArrayQueue that separates the locks for the head and tail and only supports blocking for take operations](https://webtide.com/jetty-9-goes-fast-with-mechanical-sympathy/)

        However because of the layout in memory of the class, it turned out that the head and tail pointers and locks were all within a single CPU cache row.  This is bad because when different threads running on different cores are trying to independently work on the head and tail, it turns out that they are both hitting the same area of memory and are thus repeatedly invalidating each others caches in a pattern called false sharing.


