<template>
  <v-table
    :width="1100"
    :height="280"
    even-bg-color="#f2f2f2"
    :title-rows="titleRows"
    :columns="columns"
    :table-data="tableData"
    row-hover-color="#eee"
    row-click-color="#edf7ff"
  ></v-table>
</template>

<style>
.title-cell-class-name-test1 {
  background-color: #2db7f5;
}
.title-cell-class-name-test2 {
  background-color: #f60;
}
</style>
<script>
export default {
  data() {
    return {
      multipleSort: false,
      tableData: [
        {
          name: "赵伟",
          gender: "男",
          height: "183",
          email: "zhao@gmail.com",
          tel: "156*****1987",
          hobby: "钢琴、书法、唱歌",
          address: "上海市黄浦区金陵东路569号17楼"
        },
        {
          name: "李伟",
          gender: "男",
          height: "166",
          email: "li@gmail.com",
          tel: "182*****1538",
          hobby: "钢琴、书法、唱歌",
          address: "上海市奉贤区南桥镇立新路12号2楼"
        },
        {
          name: "孙伟",
          gender: "女",
          height: "186",
          email: "sun@gmail.com",
          tel: "161*****0097",
          hobby: "钢琴、书法、唱歌",
          address: "上海市崇明县城桥镇八一路739号"
        },
        {
          name: "周伟",
          gender: "女",
          height: "188",
          email: "zhou@gmail.com",
          tel: "197*****1123",
          hobby: "钢琴、书法、唱歌",
          address: "上海市青浦区青浦镇章浜路24号"
        },
        {
          name: "吴伟",
          gender: "男",
          height: "160",
          email: "wu@gmail.com",
          tel: "183*****6678",
          hobby: "钢琴、书法、唱歌",
          address: "上海市松江区乐都西路867-871号"
        },
        {
          name: "冯伟",
          gender: "女",
          height: "168",
          email: "feng@gmail.com",
          tel: "133*****3793",
          hobby: "钢琴、书法、唱歌",
          address: "上海市金山区龙胜路143号一层"
        }
      ],
      columns: [
        {
          field: "custome",
          width: 50,
          titleAlign: "center",
          columnAlign: "center",
          formatter: function(rowData, index) {
            return index < 3
              ? '<span style="color:red;font-weight: bold;">' +
                  (index + 1) +
                  "</span>"
              : index + 1;
          },
          isFrozen: true
        },
        { field: "name", width: 100, columnAlign: "center" },
        { field: "gender", width: 150, columnAlign: "center" },
        { field: "height", width: 150, columnAlign: "center" },
        { field: "tel", width: 190, columnAlign: "center" },
        { field: "email", width: 230, columnAlign: "center" },
        { field: "hobby", width: 230, columnAlign: "center" },
        { field: "address", width: 330, columnAlign: "left" }
      ],

      titleRows: [
        [
          {
            fields: ["custome"],
            title: "平台/钱币",
            titleAlign: "center",
            rowspan: 2
          },
          {
            fields: ["name"],
            title: "币种",
            titleAlign: "center",
            rowspan: 2
          },
          {
            fields: ["gender"],
            title: "数量",
            titleAlign: "center",
            rowspan: 2
          },
          {
            fields: ["height", "tel", "email"],
            title: "价格",
            titleAlign: "center",
            colspan: 3
          },
          {
            fields: ["hobby"],
            title: "委托时间",
            titleAlign: "center",
            rowspan: 2
          },
          {
            fields: ["address"],
            title: "成交时间",
            titleAlign: "center",
            rowspan: 2
          }
        ],

        [
          { fields: ["height"], title: "委托", titleAlign: "center" },
          { fields: ["tel"], title: "当前", titleAlign: "center" },
          { fields: ["email"], title: "价差", titleAlign: "center" }
        ]
      ]
    };
  }
};
</script>