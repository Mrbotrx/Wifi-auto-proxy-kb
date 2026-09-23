function FindProxyForURL(url, host) {
    var slot = Math.floor((new Date()).getMinutes() / 5) % 10;

    var proxies = [
        "SOCKS5 202.91.41.102:1080",
        "SOCKS5 118.179.205.159:9090",
        "SOCKS5 144.24.111.128:1088",
        "PROXY 14.139.235.82:3128",
        "PROXY 45.194.41.141:8080",
        "PROXY 45.194.41.231:8080",
        "SOCKS5 49.0.0.175:1080",
        "SOCKS4 103.149.75.82:1080",
        "SOCKS5 115.127.112.178:1080",
        "PROXY 103.81.175.141:22311"
    ];

    return proxies[slot];
}
