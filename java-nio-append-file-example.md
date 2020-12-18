# [Java Nio Append File Example](https://examples.javacodegeeks.com/core-java/nio/java-nio-append-file-example/)

Java NIO was developed to allow the Java programmers implement the high-speed input-output operations without using the custom native code. NIO moves the time-taking I/O activities like filling, namely and draining buffers etc back into the operating system, thus allows the great increase in the operational speed.

## Java NIO consists of the following core components:

Channel & Buffers
Selectors
Non-blocking I/O

1. Channel & Buffers

    In standard, I/O API, the character streams and the byte streams are used, but in NIO developers work with the channels and buffers. In this case, the data is always written from a buffer to a channel and read from a channel to a buffer

    ![channel-and-buffer](/pictures/java-nio-append-file-channel-and-buffer.png)

2. Selectors

    It is an object that can be used for monitoring the multiple channels for events like data arrived, the connection opened etc. Thus, a single thread can monitor the multiple channels for the data

    ![selector](//pictures/java-nio-append-file-selector.png)
s
3. Non-blocking I/O

    Here the application immediately returns the available data and application should have a pooling mechanism to find out when more data is available

*Do note, Java NIO has more components and classes but the Channel, Buffer, and Selector are used as the core of the API.*

## Java NIO Components

The important NIO classes are grouped under different categories that are shown below:

![important-nio-classes](/pictures/java-nio-append-file-important-nio-classes.png)