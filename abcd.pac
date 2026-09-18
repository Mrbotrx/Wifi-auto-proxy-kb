function FindProxyForURL(url, host) {

    host = host.toLowerCase();

    // লোকাল ট্রাফিকের জন্য সরাসরি কানেকশন
    if (isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0") ||
        isInNet(dnsResolve(host), "127.0.0.0", "255.0.0.0")) {
        return "DIRECT";
    }

    // Bangladesh (.bd)
    if (dnsDomainIs(host, ".bd")) {
        return "PROXY 103.151.102.246:8080; PROXY 103.119.100.98:8080; DIRECT";
    }

    // India (.in)
    if (dnsDomainIs(host, ".in")) {
        return "PROXY 117.236.124.166:3128; PROXY 14.139.235.82:3128; DIRECT";
    }

    // Pakistan (.pk)
    if (dnsDomainIs(host, ".pk")) {
        return "PROXY 111.119.178.68:8080; PROXY 202.163.117.242:8080; DIRECT";
    }

    // Nepal (.np)
    if (dnsDomainIs(host, ".np")) {
        return "PROXY 103.240.176.10:8080; PROXY 202.79.43.34:8080; DIRECT";
    }

    // South Korea (.kr)
    if (dnsDomainIs(host, ".kr")) {
        return "PROXY 211.202.83.67:8080; PROXY 121.139.117.247:8080; DIRECT";
    }

    // বাকি সব ওয়েবসাইট
    return "DIRECT";
}
