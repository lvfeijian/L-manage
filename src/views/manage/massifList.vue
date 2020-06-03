<template>
  <div class="massiflist">
    <div class="header">
      <el-input placeholder="请输入内容" v-model="gardenInputVal" @keyup.enter.native="searchGarden"></el-input>
      <el-button type="primary" @click="searchGarden">搜索</el-button>
      <el-button icon="el-icon-plus" type="success" plain class="add" @click="addGarden">添加</el-button>
    </div>
    <el-table :data="massifDate.list" style="width: 100%" stripe border>
      <el-table-column label="序号" fixed type="index" width="90" align="center"></el-table-column>
      <el-table-column prop="gardenName" label="果园名称" align="center"></el-table-column>
      <el-table-column prop="gardenOwner" label="负责人" align="center" width="150"></el-table-column>
      <el-table-column prop="address" label="地址" align="center"></el-table-column>
      <el-table-column :formatter="formatterGardenArea" label="面积" align="center" width="150"></el-table-column>
      <el-table-column prop="gardenApproveState" label="状态" align="center" width="120">
        <template scope="scope">
          <span v-if="scope.row.gardenApproveState == 'PS'" style="color:#85cf60">通过</span>
          <span v-else-if="scope.row.gardenApproveState == 'RJ'" style="color:red">驳回</span>
          <span v-else-if="scope.row.gardenApproveState == 'CP'" style="color:blue">待审核</span>
          <span v-else-if="scope.row.gardenApproveState == 'LE'" style="color:red">删除</span>
        </template>
      </el-table-column>
      <el-table-column prop="updateApproveStatus" label="操作" align="center" width="150">
        <template scope="scope">
          <el-button
            plain
            type="danger"
            size="small"
            v-if="scope.row.gardenApproveState == 'CP' || scope.row.updateApproveStatus == 'CP'"
          >处理</el-button>
          <el-button
            plain
            type="success"
            size="small"
            @click="showDetail()"
            v-if="scope.row.gardenApproveState == 'PS' && (scope.row.updateApproveStatus == 'PS' || scope.row.updateApproveStatus == null)"
          >详情</el-button>
          <el-button plain type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="massifDate.total"
    ></el-pagination>
    <!-- 添加果园 -->
    <el-dialog title="添加果园" :visible.sync="addGardenDialog" width="35%" :center='true' :close-on-click-modal="false" style="color:#00f">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="果园面积" prop="area">
                <el-input v-model.number="ruleForm.area"></el-input>
            </el-form-item>
            <el-form-item label="负责人" prop="people">
                <el-input v-model="ruleForm.people"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" prop="iphone">
                <el-input v-model="ruleForm.iphone"></el-input>
            </el-form-item>
            <el-form-item label="果园简介" prop="synopsis">
                <el-input v-model="ruleForm.synopsis"></el-input>
            </el-form-item>
            <el-form-item label="果园地址" prop="gardenAddress">
                <el-input v-model="ruleForm.gardenAddress"></el-input>
            </el-form-item>
            <el-form-item label="详细地址" prop="detailedAddress">
                <el-input v-model="ruleForm.detailedAddress"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="addGardenDialog = false">取 消</el-button>
            <el-button type="primary" @click="addGardenDialog = false">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
import types from "@/store/constants/types";
import ns from "@/store/constants/ns";
import { createNamespacedHelpers, mapState } from "vuex";
const namespaced = ns.MASSIFLIST + "/";
const thisMapstate = createNamespacedHelpers(namespaced).mapState;
export default {
  name: "massifList",
  computed: {
    ...thisMapstate(["massifDate"])
  },
  data() {
    return {
      gardenInputVal: "", //搜索框的内容
      addGardenDialog:false,//添加果园弹框的显示隐藏
      ruleForm:{
          name:'',
          area:'',
          people:'',
          iphone:'',
          synopsis:'',
          gardenAddress:'',
          detailedAddress:''
      },
      rules:{//添加果园的弹框规则
            name:[
                 { required: true, message: '请输入果园名称', trigger: 'blur' }
            ],
            area:[
                 { required: true, message: '请输入果园面积', trigger: 'blur' },
                 {type:'number',message:'面积必须为数字'}
            ],
            people:[
                 { required: true, message: '请输入负责人', trigger: 'blur' }
            ],
            iphone:[
                 { required: true, message: '请输入联系方式', trigger: 'blur' }
            ]
      }
    };
  },
  created() {
    this.$store.dispatch(namespaced + types.GET_MASSIFLIST, {
      pageNum: 1,
      pageSize: 10,
      gardenName: this.gardenInputVal
    });
  },
  methods: {
    //格式化表单数据
    formatterGardenArea(row, column) {
      return row.gardenArea + "亩";
    },
    //当前页改变时
    handleCurrentChange(val) {
      this.$store.dispatch(namespaced + types.GET_MASSIFLIST, {
        pageNum: val,
        pageSize: this.massifDate.pageSize,
        gardenName: this.gardenInputVal
      });
    },
    //每页的数据个数改变是
    handleSizeChange(val) {
      this.$store.dispatch(namespaced + types.GET_MASSIFLIST, {
        pageNum: this.massifDate.pageNum,
        pageSize: val,
        gardenName: this.gardenInputVal
      });
    },
    //搜索
    searchGarden() {
      this.$store.dispatch(namespaced + types.GET_MASSIFLIST, {
        pageNum: 1,
        pageSize: 10,
        gardenName: this.gardenInputVal
      });
    },
    //添加
    addGarden() {
        this.addGardenDialog = true
    },
    //详情
    showDetail() {}
  },
  mounted() {}
};
</script>
<style lang="scss">
.massiflist {
  height: calc(100vh - 100px);
  overflow-y: auto;
  // &::-webkit-scrollbar { width: 0 !important }
  .header {
    margin-bottom: 20px;
    display: flex;
    .el-input {
      width: 260px;
      margin-right: 20px;
    }
    .add {
      margin-left: auto;
      margin-right: 20px;
    }
  }
  .pagination {
    margin-top: 20px;

    float: right;
  }
}
.el-dialog__header {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background: #007666;
  line-height: 36px;
  border-bottom: 1px solid #f0f0f0;
}
.el-dialog__header .el-dialog__title{
  color: #f0f0f0;
  font-size: 16px;
  font-weight: bolder;
}

</style>