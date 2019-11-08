const ips = [
    {
      address: "192.168.0.2",
      mask: "255.255.255.0"
    },
    {
      address: "192.168.0.10",
      mask: "255.255.255.0"
    },
    {
      address: "192.168.0.26",
      mask: "255.255.255.0"
    },
    {
      address: "192.168.0.30",
      mask: "255.255.255.0"
    }
  ]

document.querySelector('tbody').innerHTML = ips.reduce((acc,e)=>acc+=`<tr><td>${e.address}</td><td>${e.mask}</td></tr>`,'');
