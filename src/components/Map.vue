<template>
  <div id="map" ref="map" :style="{width:width,height:height}"></div>
</template>

<script>
/**
 * 要用这个地图组件需要引入百度和leaflet的包
 * @getaddr 获取地理位置
 * center  设置标点
 */
let bgLayer = null; // 卫星影像图层
let labelLayer = null; // 标签图层
export default {
  name: "Map",
  watch: {
    center:function(latlng){
      let center = []
      center.push(...latlng)
      latlng = {
        lat:latlng[0],
        lng:latlng[1]
      }
      this.market.setLatLng(center)
      this.getLocation(latlng)
      LMAP.setView(center,5)
    }
  },
  data() {
    return {
      addr:'',
      market:null
    }
  },
  props: {
    width: {
      type: String,
      default: "500px"
    },
    height: {
      type: String,
      default: "260px"
    },
    maxZoom:{
      type:Number,
      default:15
    },
    minZoom:{
      type:Number,
      default:3
    },
    center:{//地图的标点
      type:Array,
      default(){
        return [25,117]
      }
    },
    zoom:{
      type:Number,
      default() {
        return 5
      }
    }
  },
  methods:{
    map() {
      const that = this
      const maxZoom = that.maxZoom
      const minZoom = that.minZoom
      const detectRetina = true
      let center = that.center
      let zoom = that.zoom
      //实例化一个地图对象
      window.LMAP = L.map(that.$refs.map, {
        zoomControl: false,
        zoom,
        center,
        attributionControl: false
      });
      this.market = L.marker(center).addTo(LMAP); //加标点
      
      const bgLayerOption = {
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
        detectRetina,
        maxZoom,
        minZoom,
        maxNativeZoom: 21,
      };
      bgLayer = L.tileLayer(
        "http://{s}.google.cn/maps/vt?lyrs=s%40845&hl=zh-CN&gl=CN&x={x}&y={y}&z={z}",
        bgLayerOption
      );
      // bgLayer.addTo(LMAP);

      const labelLayerOption = {
        detectRetina,
        maxZoom,
        minZoom,
        maxNativeZoom: 21
      };
      labelLayer = L.tileLayer(
        "http://maps.google.cn/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i476184508!3m17!2szh-CN!3sCN!5e18!12m4!1e68!2m2!1sset!2sRoadmapSatellite!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy5lOmwuaXxwLnY6b2Zm!4e0",
        labelLayerOption
      ); 
      // labelLayer.addTo(LMAP)
      let baseGroup = L.layerGroup([bgLayer, labelLayer]); //layerGroup用于合并图层
      baseGroup.addTo(LMAP);

      LMAP.on("click", e => {
        let lat = e.latlng.lat;
        let lng = e.latlng.lng;
        this.market.setLatLng([lat, lng]); //修改标点的位置
        LMAP.setView([lat, lng]); //修改中心点的位置
        // LMAP.panTo(e.latlng)//将中心点移动到哪里去
        this.getLocation(e.latlng)
      });
    },

    //使用百度地图通过经纬度得到具体位置
    getLocation(latlng) {
      const that = this
      let gc = new BMap.Geocoder()
      let point = new BMap.Point(latlng.lng,latlng.lat)
      gc.getLocation(point,function(rs){
        that.addr = rs.address
        let data = {
          addr:that.addr,
          latlng
        }
        that.$emit('getaddr',data)
      })
    }
  },
  mounted(){
    this.map()
  }
};
</script>

<style>
#map {
}
</style>