var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)lnwshop\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)lnwmarket\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)lnwmall\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)renaicatering\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)o-step\.com$/.test(host)) return "DIRECT";
        if (/^118\.175\.28\.44$/.test(host)) return "DIRECT";
        if (/^192\..*\..*\./.test(host)) return "DIRECT";
        if (/(?:^|\.)lnwstat\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)lnwfile\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)aukeythailand\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)ais\.co\.th$/.test(host)) return "DIRECT";
        if (/(?:^|\.)scbsonline\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)iflix\.com$/.test(host)) return "DIRECT";
        if (/http:\/\/*/.test(url)) return "+proxy";
        return "DIRECT";
    },
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (host === "[::1]" || host === "localhost" || host === "127.0.0.1") return "DIRECT";
        return "SOCKS5 localhost:2001; SOCKS localhost:2001";
    }
});
