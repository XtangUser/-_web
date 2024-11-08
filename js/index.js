// @ts-nocheck
//设备总揽
(function () {
    const chart = echarts.init(document.querySelector('.bar .chart'))
    var data = [
        {
          name: "总设备数",
          value: 698,
        },
        {
          name: "在线数",
          value: 665,
        },
        {
          name: "掉线数",
          value: 33,
        },
        {
          name: "警告次数",
          value: 195,
        },
      ];
      
      var titleArr = [],
        seriesArr = [];
      colors = [
        ["#06f2ee", "#dfeaff"],
        ["#61f9a7", "#ffdcc3"],
        ["#fe9710", "#ffedcc"],
        ["#d11348", "#fed4e0"],
      ];
      data.forEach(function (item, index) {
        titleArr.push({
          text: item.name,
          left: index * 25 + 10+"%",
          top: "75%",
          textAlign: "center",
          textStyle: {
            fontWeight: "normal",
            fontSize: "12",
            color: colors[index][0],
            textAlign: "center",
          },
        });
        seriesArr.push({
          name: item.name,
          type: "pie",
          clockWise: false,
          radius: [20, 30],
          itemStyle: {
            normal: {
              color: colors[index][0],
              shadowColor: colors[index][0],
              shadowBlur: 0,
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,
          center: [index * 25 + 10 + "%", "50%"],
          data: [
            {
              value: item.value,
              label: {
                normal: {
                  formatter: function (params) {
                    return params.value + "%";
                  },
                  position: "center",
                  show: true,
                  textStyle: {
                    fontSize: "14",
                    fontWeight: "normal",
                    color: colors[index][0],
                  },
                },
              },
            },
            {
              value: 100 - item.value,
              name: "invisible",
              itemStyle: {
                normal: {
                  color: colors[index][1],
                },
                emphasis: {
                  color: colors[index][1],
                },
              },
            },
          ],
        });
      });
    //指定配置项
   let option = {
        title: titleArr,
        series: seriesArr,
      };
    chart.setOption(option);
    //让图标跟随浏览器自适应
    window.addEventListener('resize', function () {
        chart.resize();
    })
})();
//柱形图2
(function () {
    //声明颜色数组
    const myColor = ["#1089E7", "#F57474"
        , "#DoDOE3", "#F8B448", "#8B78F6"];
    const chart = echarts.init(document.querySelector('.bar1 .chart'));
    const option = {
        title: {
            text: ''
        },
        tooltip: {
            //鼠标阴影
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '20%',
            right: '16%',
            bottom: '0%',
            top: '25px'
            // containLabel: true
        },
        xAxis: {
            type: 'value',
            show: false,
        },
        yAxis: [{
            //不显示y轴线条
            axisLine: {
                show: false,
            },
            //不显示y轴刻度
            axisTick: {
                show: false,
            },
            //把刻度标签颜色改为白色
            axisLable: {
                color: '#fff',
                fontSize: 12,
            },
            type: 'category',
            inverse: true,
            data: ["长冶市", "文山自治区", "邢台市", "景谷", "黄石市"],

        },
        {
            //不显示y轴线条
            axisLine: {
                show: false,
            },
            //不显示y轴刻度
            axisTick: {
                show: false,
            },
            //把刻度标签颜色改为白色
            axisLable: {
                color: '#fff',
                fontSize: 12,

            },
            inverse: true,

            data: [702, 350, 610, 793, 664],


        }],
        series: [
            {
                type: "bar",
                data: [70, 34, 60, 78, 69],
                //柱子之间的距离
                barCategoryGap: 50,
                yAxisIndex: 0,
                //柱子的宽度
                barWidth: 10,
                //柱子设为圆角
                //2.给itemStyle 里面的color 属性设置一个返回值函数
                itemStyle: {
                    normal: {
                        barBorderRadius: 20,
                        color: function (params) {
                            return myColor[params.dataIndex];
                        }
                    }
                },
                //图形上的文本标签
                label: {
                    normal: {
                        show: true,
                        //图形内显示
                        position: "inside",
                        //文字的显示格式
                        formatter: "{c}%",
                    }
                },


            },
            {
                type: "bar",
                barCategoryGap: 50,
                yAxisIndex: 1,
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15,
                },
                data: [100, 100, 100, 100, 100]

            }
        ]
        ,

    }
    chart.setOption(option);
    //让图标跟随浏览器自适应
    window.addEventListener('resize', function () {
        chart.resize();
    })
})();
//折线图1
// (function () {
//     const chart = echarts.init(document.querySelector('.line .chart'));
//     let yearData = [
//         {
//             year: '2020',//年份
//             data: [
//                 //两个数组是因为有两条线
//                 [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
//                 [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]]
//         },
//         {
//             year: '2021',//年份
//             data: [
//                 //两个数组是因为有两条线
//                 [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38], [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]]
//         }
//     ];
//     const option = {
//         //改变线条颜色
//         color: ["#00f2f1",
//             "#ed3f35"],

//         tooltip: {
//             trigger: 'axis'
//         },
//         legend: {
//             textStyle: {
//                 color: "#4c9bfd",
//             },
//             right: "5%",
//             //如果sersis有
//             data: ["新增游客", '新增粉丝'],
//         },
//         grid: {
//             top: '20%',
//             left: '3%',
//             right: '4%',
//             bottom: '3%',
//             //显示边框
//             show: true,
//             //边框颜色
//             borderColor: '#012f4a',
//             //   包含刻度文字在内
//             containLabel: true
//         },
//         xAxis: {
//             type: 'category',
//             //去除轴内间距
//             boundaryGap: false,
//             data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
//             axisTick: {
//                 //去除刻度线
//                 show: false,
//             },
//             axisLable: {
//                 //修改文本颜色
//                 color: "#4c9bfd",
//             },
//             axisLine: {
//                 //去除轴线
//                 show: false,
//             },


//         },
//         yAxis: {
//             type: 'value',
//             axisTick: {
//                 //去除刻度线
//                 show: false,
//             },
//             axisLable: {
//                 //修改文本颜色
//                 color: "#4c9bfd",
//             },
//             axisLine: {
//                 //去除轴线
//                 show: false,
//             },
//             //分割线颜色
//             splitLine: {
//                 lineStyle: {
//                     color: "lightblue",
//                 }
//             }

//         },
//         series: [
//             {
//                 name: '新增粉丝',
//                 type: 'line',
//                 //折现修饰圆滑
//                 smooth: 'ture',
//                 data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],


//             },
//             {
//                 name: '新增游客',
//                 type: 'line',
//                 smooth: 'ture',
//                 data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
//             },
//         ]
//     };
//     chart.setOption(option);
//     //让图标跟随浏览器自适应
//     window.addEventListener('resize', function () {
//         chart.resize();
//     });
//     $(".line h2").on("click", "a", function () {
//         //点击a之后根据当前a的索引号找到对应的yearData的相关对象
//         let obj = yearData[$(this).index()];
//         option.series[0].data = obj.data[0];
//         option.series[1].data = obj.data[1];
//         //需要重新渲染
//         chart.setOption(option);
//     });

// })();
//折线图 2
(function () {
    const chart = echarts.init(document.querySelector('.line1 .chart'));

    const option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['播放量', '转发量',],
            top: "0%",
            right: "0%",
            textStyle: {
                color: "rgba(255,255,255,)",
                fontSize: 12,
            }

        },
        grid: {
            top: "5",
            left: '20',
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: [
                    "01", "02", "03", "04", "05", "06 ", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
                //标签修饰
                axisLable: {
                    textStyle: {
                        color: "rgba(255,255,255)",
                        fontSize: 12,
                    }
                },
                //轴线
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255)",
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLable: {
                    textStyle: {
                        color: "rgba(255,255,255)",
                        fontSize: 12,
                    }
                },
                //轴线
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255)",
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "lightblue",
                    }
                }
            }
        ],
        series: [
            {
                smooth: true,
                name: '播放量',
                type: 'line',
                //单独修改曲线样式
                lineStyle: {
                    color: "#0184d5",
                    width: 2,
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                            offset: 0,
                            color: "rgba(1,132,213,0.4)"
                            //渐变色的起始颜色
                        },
                        {
                            offset: 0.8,
                            color: "rgba(1,132,213,0.1)",
                            //渐变线的结束颜色
                            shadowColor: "rgba(0,0,0,4.1)"
                        },
                        ],
                        false
                    ),
                    shadowColor: "rgba(0,0,0,.1)"
                },
                //设置拐点小圆点
                symbol: "circle",
                //拐点大小
                symbolSize: 5,
                //设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221,220,107,.1)",
                    borderwidth: 12
                },
                //开始不显示拐点,鼠标经过显示
                showSymbol: false,


                emphasis: {
                    focus: 'series'
                },
                data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
            },
            {
                smooth: true,
                name: '转发量',
                type: 'line',
                //单独修改曲线样式
                lineStyle: {
                    color: "#00d887",
                    width: 2,
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                            offset: 0,
                            color: "rgba(0,216,135,0.4)"
                            //渐变色的起始颜色
                        },
                        {
                            offset: 0.8,
                            color: "rgba(0,216,135,0.1)",
                            //渐变线的结束颜色
                            shadowColor: "rgba(0,0,0,4.1)"
                        },
                        ],
                        false
                    ),
                    shadowColor: "rgba(0,0,0,.1)"
                },
                //设置拐点小圆点
                symbol: "circle",
                //拐点大小
                symbolSize: 5,
                //设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221,220,107,.1)",
                    borderwidth: 12
                },
                //开始不显示拐点,鼠标经过显示
                showSymbol: false,

                emphasis: {
                    focus: 'series'
                },
                data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
            },
        ]
    };
    chart.setOption(option);
    //让图标跟随浏览器自适应
    window.addEventListener('resize', function () {
        chart.resize();
    });


})();
//饼形图01
(function () {
    const chart = echarts.init(document.querySelector('.pie .chart'));


    let option = {
        color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}: {c}({d}%)"

        },
        //图标组件
        legend: {
            bottom: '0%',
            left: 'center',
            itemWidth: 10,
            itemHeight: 10,
            data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],

            textStyle: {
                color: "rgba(255,255,255,1)",
                fontSize: "12",
            },
        },

        series: [
            {
                name: '年龄分布',
                type: 'pie',
                radius: ['40%', '60%'],
                center: ['50%', "40%"],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1, name: "0岁以下" },
                    { value: 4, name: "20-29岁" },
                    { value: 2, name: "30-39岁" },
                    { value: 2, name: "40-49岁" },
                    { value: 1, name: "50岁以上" }
                ],

            }
        ]
    };
    chart.setOption(option);
    //让图标跟随浏览器自适应
    window.addEventListener('resize', function () {
        chart.resize();
    });
})();
//地图航线
(function(){
    const chart = echarts.init(document.querySelector('.map .chart'));
    var geoCoordMap = {
        上海: [121.4648, 31.2891],
        东莞: [113.8953, 22.901],
        东营: [118.7073, 37.5513],
        中山: [113.4229, 22.478],
        临汾: [111.4783, 36.1615],
        临沂: [118.3118, 35.2936],
        丹东: [124.541, 40.4242],
        丽水: [119.5642, 28.1854],
        乌鲁木齐: [87.9236, 43.5883],
        佛山: [112.8955, 23.1097],
        保定: [115.0488, 39.0948],
        兰州: [103.5901, 36.3043],
        包头: [110.3467, 41.4899],
        北京: [116.4551, 40.2539],
        北海: [109.314, 21.6211],
        南京: [118.8062, 31.9208],
        南宁: [108.479, 23.1152],
        南昌: [116.0046, 28.6633],
        南通: [121.1023, 32.1625],
        厦门: [118.1689, 24.6478],
        台州: [121.1353, 28.6688],
        合肥: [117.29, 32.0581],
        呼和浩特: [111.4124, 40.4901],
        咸阳: [108.4131, 34.8706],
        哈尔滨: [127.9688, 45.368],
        唐山: [118.4766, 39.6826],
        嘉兴: [120.9155, 30.6354],
        大同: [113.7854, 39.8035],
        大连: [122.2229, 39.4409],
        天津: [117.4219, 39.4189],
        太原: [112.3352, 37.9413],
        威海: [121.9482, 37.1393],
        宁波: [121.5967, 29.6466],
        宝鸡: [107.1826, 34.3433],
        宿迁: [118.5535, 33.7775],
        常州: [119.4543, 31.5582],
        广州: [113.5107, 23.2196],
        廊坊: [116.521, 39.0509],
        延安: [109.1052, 36.4252],
        张家口: [115.1477, 40.8527],
        徐州: [117.5208, 34.3268],
        德州: [116.6858, 37.2107],
        惠州: [114.6204, 23.1647],
        成都: [103.9526, 30.7617],
        扬州: [119.4653, 32.8162],
        承德: [117.5757, 41.4075],
        拉萨: [91.1865, 30.1465],
        无锡: [120.3442, 31.5527],
        日照: [119.2786, 35.5023],
        昆明: [102.9199, 25.4663],
        杭州: [119.5313, 29.8773],
        枣庄: [117.323, 34.8926],
        柳州: [109.3799, 24.9774],
        株洲: [113.5327, 27.0319],
        武汉: [114.3896, 30.6628],
        汕头: [117.1692, 23.3405],
        江门: [112.6318, 22.1484],
        沈阳: [123.1238, 42.1216],
        沧州: [116.8286, 38.2104],
        河源: [114.917, 23.9722],
        泉州: [118.3228, 25.1147],
        泰安: [117.0264, 36.0516],
        泰州: [120.0586, 32.5525],
        济南: [117.1582, 36.8701],
        济宁: [116.8286, 35.3375],
        海口: [110.3893, 19.8516],
        淄博: [118.0371, 36.6064],
        淮安: [118.927, 33.4039],
        深圳: [114.5435, 22.5439],
        清远: [112.9175, 24.3292],
        温州: [120.498, 27.8119],
        渭南: [109.7864, 35.0299],
        湖州: [119.8608, 30.7782],
        湘潭: [112.5439, 27.7075],
        滨州: [117.8174, 37.4963],
        潍坊: [119.0918, 36.524],
        烟台: [120.7397, 37.5128],
        玉溪: [101.9312, 23.8898],
        珠海: [113.7305, 22.1155],
        盐城: [120.2234, 33.5577],
        盘锦: [121.9482, 41.0449],
        石家庄: [114.4995, 38.1006],
        福州: [119.4543, 25.9222],
        秦皇岛: [119.2126, 40.0232],
        绍兴: [120.564, 29.7565],
        聊城: [115.9167, 36.4032],
        肇庆: [112.1265, 23.5822],
        舟山: [122.2559, 30.2234],
        苏州: [120.6519, 31.3989],
        莱芜: [117.6526, 36.2714],
        菏泽: [115.6201, 35.2057],
        营口: [122.4316, 40.4297],
        葫芦岛: [120.1575, 40.578],
        衡水: [115.8838, 37.7161],
        衢州: [118.6853, 28.8666],
        西宁: [101.4038, 36.8207],
        西安: [109.1162, 34.2004],
        贵阳: [106.6992, 26.7682],
        连云港: [119.1248, 34.552],
        邢台: [114.8071, 37.2821],
        邯郸: [114.4775, 36.535],
        郑州: [113.4668, 34.6234],
        鄂尔多斯: [108.9734, 39.2487],
        重庆: [107.7539, 30.1904],
        金华: [120.0037, 29.1028],
        铜川: [109.0393, 35.1947],
        银川: [106.3586, 38.1775],
        镇江: [119.4763, 31.9702],
        长春: [125.8154, 44.2584],
        长沙: [113.0823, 28.2568],
        长治: [112.8625, 36.4746],
        阳泉: [113.4778, 38.0951],
        青岛: [120.4651, 36.3373],
        韶关: [113.7964, 24.7028],
      };
      
      var XAData = [
        [{ name: "西安" }, { name: "郑州", value: 100 }],
        [{ name: "西安" }, { name: "上海", value: 100 }],
        [{ name: "长沙" }, { name: "广州", value: 100 }],
        [{ name: "重庆" }, { name: "西宁", value: 100 }],
        [{ name: "西安" }, { name: "银川", value: 100 }],
      ];
      
      var XNData = [
        [{ name: "邯郸" }, { name: "青岛", value: 100 }],
        [{ name: "西宁" }, { name: "上海", value: 100 }],
        [{ name: "西宁" }, { name: "阳泉", value: 100 }],
        [{ name: "连云港" }, { name: "西安", value: 100 }],
        [{ name: "西宁" }, { name: "银川", value: 100 }],
      ];
      
      var YCData = [
        [{ name: "银川" }, { name: "北京", value: 100 }],
        [{ name: "银川" }, { name: "广州", value: 100 }],
        [{ name: "银川" }, { name: "上海", value: 100 }],
        [{ name: "银川" }, { name: "西安", value: 100 }],
        [{ name: "银川" }, { name: "西宁", value: 100 }],
      ];
      
      var planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
      //var planePath = 'arrow';
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
      
          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push({
              fromName: dataItem[0].name,
              toName: dataItem[1].name,
              coords: [fromCoord, toCoord],
              value: dataItem[1].value,
            });
          }
        }
        return res;
      };
      
      var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
      var series = [];
      [
        ["西安", XAData],
        ["西宁", XNData],
        ["银川", YCData],
      ].forEach(function (item, i) {
        series.push(
          {
            name: item[0] + " Top3",
            type: "lines",
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: "red", //arrow箭头的颜色
              symbolSize: 3,
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 0,
                curveness: 0.2,
              },
            },
            data: convertData(item[1]),
          },
          {
            name: item[0] + " Top3",
            type: "lines",
            zlevel: 2,
            symbol: ["none", "arrow"],
            symbolSize: 10,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: planePath,
              symbolSize: 15,
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2,
              },
            },
            data: convertData(item[1]),
          },
          {
            name: item[0] + " Top3",
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              brushType: "stroke",
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{b}",
              },
            },
            symbolSize: function (val) {
              return val[2] / 8;
            },
            itemStyle: {
              normal: {
                color: color[i],
              },
              emphasis: {
                areaColor: "#2B91B7",
              },
            },
            data: item[1].map(function (dataItem) {
              return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
              };
            }),
          }
        );
      });
      let option = {
        tooltip: {
          trigger: "item",
          formatter: function (params, ticket, callback) {
            if (params.seriesType == "effectScatter") {
              return "线路：" + params.data.name + "" + params.data.value[2];
            } else if (params.seriesType == "lines") {
              return (
                params.data.fromName +
                ">" +
                params.data.toName +
                "<br />" +
                params.data.value
              );
            } else {
              return params.name;
            }
          },
        },
        legend: {
          textStyle: {
            color: "#fff",
          },
          selectedMode: "multiple",
        },
        geo: {
          map: "china",
          label: {
            emphasis: {
              show: true,
              color: "#fff",
            },
          },
          zoom:1.2,
          roam: true,
          itemStyle: {
            normal: {
                //地图省份颜色
              areaColor: "rgba(20,41,87,.5)",
              borderColor: "#195BB9",
              borderWidth: 1,
            },
            emphasis: {
              areaColor: "#2B91B7",
            },
          },
        },
        series: series,
      };
    chart.setOption(option);
     //让图标跟随浏览器自适应
     window.addEventListener('resize', function () {
        chart.resize();
    });

})();
// 安装计划
(function(){
    const chart = echarts.init(document.querySelector('.pie1 .chart'));
    var series = [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          stack: 'a',
          name: 'a'
        },
        {
          data: [10, 46, 64, '-', 0, '-', 0],
          type: 'bar',
          stack: 'a',
          name: 'b'
        },
        {
          data: [30, '-', 0, 20, 10, '-', 0],
          type: 'bar',
          stack: 'a',
          name: 'c'
        },
        {
          data: [30, '-', 0, 20, 10, '-', 0],
          type: 'bar',
          stack: 'b',
          name: 'd'
        },
        {
          data: [10, 20, 150, 0, '-', 50, 10],
          type: 'bar',
          stack: 'b',
          name: 'e'
        }
      ];
      const stackInfo = {};
      for (let i = 0; i < series[0].data.length; ++i) {
        for (let j = 0; j < series.length; ++j) {
          const stackName = series[j].stack;
          if (!stackName) {
            continue;
          }
          if (!stackInfo[stackName]) {
            stackInfo[stackName] = {
              stackStart: [],
              stackEnd: []
            };
          }
          const info = stackInfo[stackName];
          const data = series[j].data[i];
          if (data && data !== '-') {
            if (info.stackStart[i] == null) {
              info.stackStart[i] = j;
            }
            info.stackEnd[i] = j;
          }
        }
      }
      for (let i = 0; i < series.length; ++i) {
        const data = series[i].data;
        const info = stackInfo[series[i].stack];
        for (let j = 0; j < series[i].data.length; ++j) {
          // const isStart = info.stackStart[j] === i;
          const isEnd = info.stackEnd[j] === i;
          const topBorder = isEnd ? 20 : 0;
          const bottomBorder = 0;
          data[j] = {
            value: data[j],
            itemStyle: {
              borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
            }
          };
        }
      }
    let option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: series
      };
    chart.setOption(option);
     //让图标跟随浏览器自适应
     window.addEventListener('resize', function () {
        chart.resize();
    });

})();

