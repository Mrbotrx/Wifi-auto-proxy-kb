function FindProxyForURL(url, host) {

    // Local/private network bypass
    if (
        isPlainHostName(host) ||
        isInNet(host, "10.0.0.0", "255.0.0.0") ||
        isInNet(host, "172.16.0.0", "255.240.0.0") ||
        isInNet(host, "192.168.0.0", "255.255.0.0") ||
        isInNet(host, "127.0.0.0", "255.0.0.0")
    ) {
        return "DIRECT";
    }

    // Proxy priority / failover
    return "PROXY 103.141.174.54:11411; " +
           "SOCKS5 103.197.48.208:1080; " +
           "PROXY 103.141.174.38:11411; " +
           "DIRECT";
}
