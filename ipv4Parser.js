function ipv4Parser(ip, mask) {
    const ipOctets = ip.split('.').map(Number);
    const maskOctets = mask.split('.').map(Number);

    const networkOctets = [];
    const hostOctets = [];

    for (let i = 0; i < 4; i++) {
        const net = ipOctets[i] & maskOctets[i];
        networkOctets.push(net);


        const host = ipOctets[i] & (~maskOctets[i] & 255);
        hostOctets.push(host);
    }


    return [
        networkOctets.join('.'),
        hostOctets.join('.')
    ];
}