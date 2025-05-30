  const map = L.map('map').setView([31.2304, 121.4737], 12); // Shanghai

    // Gaode (AMap) tile layer - works in China
    L.tileLayer(
      'https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}',
      {
        subdomains: ['1', '2', '3', '4'],
        attribution: '© 高德地图 (Gaode Map)',
        maxZoom: 18,
      }
    ).addTo(map);

    // Add a marker
    L.marker([31.2304, 121.4737])
      .addTo(map)
      .bindPopup('We are here!')
      .openPopup();