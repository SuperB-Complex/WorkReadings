# Why is Trie necessary at server

Looking up string values is probably one of the most common activities in a HTTP server, as header lines are parsed and the semantic meaning interpreted from the text headers.  A simple hash map look up of a string can be moderately efficient in both space and time, but it assumes that you have a String instance in the first place.  When parsing HTTP, we just have bytes in a buffer and it is costly to have to create a String from these bytes just to lookup what string it is.  Furthermore we need case insensitivity, which is not well supported by the standard JVM hash maps.

    pasring http header

    standard JVM hash map is not enough
        prerequiste: already have a string instance
        reality: having bytes in a buffer while parsing HTTP, it's costly to create a string from these bytes + insensitivity
