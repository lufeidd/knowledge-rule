<template>
  <div class="compents-container">
    <!-- 按钮 -->
    <article id="button">
      <p>按钮</p>
      <div class="buttons" style="padding:0 15px;margin-bottom:10px;">
        <button class="huoba-btn huoba-btn-one">按钮一</button>
        <button class="huoba-btn huoba-btn-two">按钮二</button>
        <button class="huoba-btn huoba-btn-four">+按钮四</button>
      </div>
      <div>
        <button class="huoba-btn huoba-btn-three">按钮三</button>
      </div>
      <div>
        <button class="huoba-btn huoba-btn-three disabled">按钮三禁用</button>
      </div>
    </article>
    <!-- 按钮导航 -->
    <article id="button-nav">
      <p>按钮导航</p>
      <div class="huoba-button-nav">
        <div class="huoba-button-nav-left">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-ellipsis-line" />
          </svg>
        </div>
        <div class="huoba-button-nav-right">
          <button class="huoba-btn huoba-btn-two">查看物流</button>
          <button class="huoba-btn huoba-btn-two" style="margin-left:15px;">评价</button>
          <button class="huoba-btn huoba-btn-one" style="margin-left:15px;">再次购买</button>
        </div>
      </div>
      <div class="huoba-button-nav">
        <div class="huoba-button-nav-left">
          <span class="word">删除订单</span>
        </div>
        <div class="huoba-button-nav-right">
          <button class="huoba-btn huoba-btn-two">查看物流</button>
          <button class="huoba-btn huoba-btn-two" style="margin-left:15px;">评价</button>
          <button class="huoba-btn huoba-btn-one" style="margin-left:15px;">再次购买</button>
        </div>
      </div>
    </article>
    <!-- 搜索导航 -->
    <article id="search">
      <p>搜索导航</p>
      <van-tag mark>搜索导航一</van-tag>
      <div class="huoba-search">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          shape="round"
          @search="onSearch"
        >
          <div slot="action" @click="onSearch">搜索</div>
          <div slot="left-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-littleSearch-line" />
            </svg>
          </div>
        </van-search>
      </div>
      <van-tag mark>搜索导航二</van-tag>
      <div class="huoba-search">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          shape="round"
          @search="onSearch"
          readonly
        >
          <div slot="action" @click="onSearch">取消</div>
          <div slot="left-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-littleSearch-line" />
            </svg>
          </div>
        </van-search>
      </div>
    </article>
    <!-- 商品列表 -->
    <article id="goods-list">
      <p>商品列表</p>
      <!-- 列表一 -->
      <van-tag mark>列表一</van-tag>
      <div class="huoba-goods-list huoba-goods-list-one">
        <div class="huoba-goods-list-left">
          <div class="ratioBox">
            <div class="box">
              <img src="http://file.mhuoba.com/picture/album/20190703/14/20190703141357973.png" alt />
            </div>
            <span class="huoba-goods-list-label">图书</span>
          </div>
        </div>
        <div class="huoba-goods-list-mid">
          <span class="huoba-goods-title">
            <span>新版中国少年儿童百科全书新版中国少年儿书儿童百科全书看新版中国少年儿童百科全书新版中国少年儿书儿童百科全书看</span>
          </span>
          <div>
            <span class="huoba-goods-price">￥9.9</span>
            <span class="huoba-goods-num">x1</span>
          </div>
        </div>
        <div class="huoba-goods-list-right">
          <span></span>
          <span class="huoba-goods-opera">申请售后</span>
        </div>
      </div>
      <!-- 列表二 -->
      <van-tag mark>列表二</van-tag>
      <div class="huoba-goods-list huoba-goods-list-two">
        <div class="huoba-goods-list-left">
          <div class="ratioBox">
            <div class="box">
              <img src="http://file.mhuoba.com/picture/album/20190703/14/20190703141357973.png" alt />
            </div>
            <span class="huoba-goods-list-label">图书</span>
          </div>
        </div>
        <div class="huoba-goods-list-mid">
          <span class="huoba-goods-title">
            <span class="huoba-goods-title-label">拼团</span>
            <span>新版中国少年儿童百科全书新版中国少年儿书儿童百科全书看新版中国少年儿童百科全书新版中国少年儿书儿童百科全书看</span>
          </span>
          <div>
            <span class="huoba-goods-price">￥9.9</span>
            <span class="huoba-goods-num">x1</span>
          </div>
        </div>
        <div class="huoba-goods-list-right">
          <span></span>
          <span class="huoba-goods-opera">申请售后</span>
        </div>
      </div>
      <!-- 列表三 -->
      <van-tag mark>列表三</van-tag>
      <div class="huoba-goods-list huoba-goods-list-three">
        <div class="huoba-goods-list-left">
          <div class="ratioBox">
            <div class="box">
              <img src="http://file.mhuoba.com/picture/album/20190703/14/20190703141357973.png" alt />
            </div>
            <span class="huoba-goods-list-label">专辑</span>
          </div>
        </div>
        <div class="huoba-goods-list-mid">
          <span class="huoba-goods-title">
            <span class="huoba-goods-title-label">拼团</span>
            <span>新版中国少年儿童百科全书新版中国少年儿书儿童百科全书看新版中国少年儿童百科全书新版中国少年儿书儿童百科全书看</span>
          </span>
        </div>
        <div class="huoba-goods-list-right">
          <span class="huoba-goods-price">￥9.9</span>
          <span class="huoba-goods-num">x1</span>
          <span class="huoba-goods-bag">多个包裹</span>
        </div>
      </div>
      <!-- 列表四 -->
      <van-tag mark>列表四</van-tag>
      <div class="huoba-goods-list huoba-goods-list-four">
        <div class="huoba-goods-list-left">
          <div class="huoba-goods-list-imgs" v-for="(item,index) in 3" :key="index">
            <div class="ratioBox">
              <div class="box">
                <img
                  src="http://file.mhuoba.com/picture/album/20190703/14/20190703141357973.png"
                  alt
                />
              </div>
              <span class="huoba-goods-list-label">专辑</span>
            </div>
          </div>
        </div>
        <!-- <span class="huoba-goods-list-mid">
          <span class="huoba-goods-title">
            <span class="huoba-goods-title-label">拼团</span>
            <span>新版中国少年儿童百科全书新版中国少年儿书儿童百科全书看新版中国少年儿童百科全书新版中国少年儿书儿童百科全书看</span>
          </span>
        </span>-->
        <div class="huoba-goods-list-right">
          <span class="huoba-goods-price">￥9.9</span>
          <span class="huoba-goods-num">x1</span>
          <span class="huoba-goods-bag">多个包裹</span>
        </div>
      </div>
      <!-- 列表五 -->
      <van-tag mark>列表五</van-tag>
      <div class="huoba-goods-list huoba-goods-list-five">
        <div class="huoba-goods-list-check">
          <svg class="icon checked" aria-hidden="true" v-if="is_checked == 1" @click="checkGoods">
            <use xlink:href="#icon-checked-block" />
          </svg>
          <svg class="icon" aria-hidden="true" v-if="is_checked == 0" @click="checkGoods">
            <use xlink:href="#icon-uncheck-line" />
          </svg>
        </div>
        <div class="huoba-goods-list-left">
          <div class="ratioBox">
            <div class="box">
              <img src="http://file.mhuoba.com/picture/album/20190703/14/20190703141357973.png" alt />
            </div>
            <span class="huoba-goods-list-label">图书</span>
          </div>
        </div>
        <div class="huoba-goods-list-mid">
          <span class="huoba-goods-title">
            <span>新版中国少年儿童百科全书新版中国少年儿书儿童百科全书看新版中国少年儿童百科全书新版中国少年儿书儿童百科全书看</span>
          </span>
          <div>
            <span class="huoba-goods-price">￥9.9</span>
            <span class="huoba-goods-num">x1</span>
          </div>
        </div>
        <div class="huoba-goods-list-right">
          <span></span>
          <span class="huoba-goods-opera">已退款</span>
        </div>
      </div>
      <!-- 列表五不可选状态 -->
      <div class="huoba-goods-list huoba-goods-list-five uncheck">
        <div class="huoba-goods-list-check">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-uncheck-line" />
          </svg>
        </div>
        <div class="huoba-goods-list-left">
          <div class="ratioBox">
            <div class="box">
              <img src="http://file.mhuoba.com/picture/album/20190703/14/20190703141357973.png" alt />
            </div>
            <span class="huoba-goods-list-label">图书</span>
          </div>
        </div>
        <div class="huoba-goods-list-mid">
          <span class="huoba-goods-title">
            <span>新版中国少年儿童百科全书新版中国少年儿书儿童百科全书看新版中国少年儿童百科全书新版中国少年儿书儿童百科全书看</span>
          </span>
          <div>
            <span class="huoba-goods-price">￥9.9</span>
            <span class="huoba-goods-num">x1</span>
          </div>
        </div>
        <div class="huoba-goods-list-right">
          <span></span>
          <span class="huoba-goods-opera">已退款</span>
        </div>
      </div>
      <!-- 列表六 -->
      <van-tag mark>列表六</van-tag>
      <div class="huoba-goods-list huoba-goods-list-six">
        <div class="huoba-goods-list-content">
          <div class="huoba-goods-list-left">
            <div class="ratioBox">
              <div class="box">
                <img
                  src="https://file.mhuoba.com/shop/7/100032/picture/pages/20200421/14/20200421144745117.jpg"
                  alt
                />
              </div>
            </div>
          </div>
          <div class="huoba-goods-list-right">
            <span>订单编号：487956213</span>
            <span>国内承运人：中通快递</span>
          </div>
        </div>
      </div>
      <!-- 列表七 -->
      <van-tag mark>列表七</van-tag>
      <div class="huoba-goods-list huoba-goods-list-seven">
        <swiper class="swiperTags" :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item,index) in 8" :key="index">
            <div class="huoba-goods-list-imgs">
              <div class="ratioBox">
                <span class="huoba-goods-list-label">图书</span>
                <span class="huoba-goods-list-label price">￥60.00</span>
                <div class="box">
                  <img
                    src="http://file.mhuoba.com/picture/album/20190703/14/20190703141357973.png"
                    alt
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </article>
    <!-- 单元格 -->
    <article id="cell">
      <p>单元格</p>
      <!-- 单元格一 -->
      <van-tag mark>单元格一</van-tag>
      <div class="huoba-cell">
        <div class="huoba-cell-title">
          <div class="huoba-cell-headImg">
            <div class="ratioBox">
              <div class="box">
                <img
                  src="http://file.mhuoba.com/platform/picture/admin/20191105/15/20191105155803353.png"
                  alt
                />
              </div>
            </div>
          </div>
          <span class="huoba-cell__title">火把知识</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next-line" />
          </svg>
        </div>
        <div class="huoba-cell-value"></div>
      </div>
      <div class="huoba-cell">
        <div class="huoba-cell-title">
          <div class="huoba-cell-headImg">
            <div class="ratioBox">
              <div class="box">
                <img
                  src="http://file.mhuoba.com/platform/picture/admin/20191105/15/20191105155803353.png"
                  alt
                />
              </div>
            </div>
          </div>
          <div class="huoba-cell__title">火把知识</div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next-line" />
          </svg>
        </div>
        <div class="huoba-cell-value">已退款</div>
      </div>
      <!-- 单元格二 -->
      <van-tag mark>单元格二</van-tag>
      <van-cell title="货物状态：" value="请选择" is-link></van-cell>
      <!-- 单元格三 -->
      <van-tag mark>单元格三</van-tag>
      <div class="huoba-cell huoba-cell-three">
        <div class="huoba-cell-left">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-location-line" />
          </svg>
        </div>
        <div class="huoba-cell-mid">
          <div class="huoba-cell-info">
            <span class="huoba-cell-name">周元</span>
            <span>1377474774</span>
          </div>
          <div class="huoba-cell-subinfo">浙江省杭州市余杭区金家渡南路3号</div>
        </div>
        <div class="huoba-cell-right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next-line" />
          </svg>
        </div>
      </div>
      <!---->
      <div class="huoba-cell huoba-cell-three">
        <div class="huoba-cell-left">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-interflow-line" />
          </svg>
        </div>
        <div class="huoba-cell-mid">
          <div class="huoba-cell-logticinfo">
            <span>这里是物流信息这里是物流信息这里是物流信息这里是物流信息这里是信息这里是物流物</span>
          </div>
          <div class="huoba-cell-timeinfo">2019-2-13 20:34:34</div>
        </div>
        <div class="huoba-cell-right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next-line" />
          </svg>
        </div>
      </div>
      <!---->
      <div class="huoba-cell huoba-cell-three">
        <div class="huoba-cell-left">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-refund-all" />
          </svg>
        </div>
        <div class="huoba-cell-mid">
          <div class="huoba-cell-type">
            <span>退货退款</span>
          </div>
          <div class="huoba-cell-typedesc">已收到货，需要退换已收到的货物</div>
        </div>
        <div class="huoba-cell-right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next-line" />
          </svg>
        </div>
      </div>
      <!-- 单元格四 -->
      <van-tag mark>单元格四</van-tag>
      <div class="huoba-cell huoba-cell-four">
        <div class="huoba-cell-left">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-daizhifu" />
          </svg>
        </div>
        <div class="huoba-cell-mid">
          <div>
            需付款:￥
            <span class="huoba-cell-money">137.00</span>
          </div>
          <div class="huoba-cell-paytime">
            <span>支付剩余时间：</span>
            <span class="huoba-cell-time">00</span>:
            <span class="huoba-cell-time">24</span>:
            <span class="huoba-cell-time">36</span>
          </div>
        </div>
        <div class="huoba-cell-right">
          <span class="huoba-cell-gopay">去支付</span>
        </div>
      </div>
      <!-- 单元格五 -->
      <van-tag mark>单元格五</van-tag>
      <div class="huoba-cell huoba-cell-five">
        <span class="huoba-cell-text">此订单共99件商品，点击查看</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-next-line" />
        </svg>
      </div>
      <!-- 单元格六 -->
      <van-tag mark>单元格六</van-tag>
      <div class="huoba-cell-six">
        <van-cell title="商品总额" value="¥95.00"></van-cell>
        <van-cell title="活动立减" value="-¥22.30"></van-cell>
        <van-cell title="优惠券" value="-¥5.00"></van-cell>
        <van-cell title="运费" value="+¥8.00"></van-cell>
        <div class="huoba-cell-last">
          <span>实付款</span>
          <span class="huoba-cell-last-money">
            ￥
            <span class="huoba-cell-last-num">22.30</span>
          </span>
        </div>
      </div>
      <van-tag mark>单元格七</van-tag>
      <div class="huoba-cell-seven">
        <div class="huoba-cell-head huoba-cell-line">实物商品</div>
        <div class="huoba-cell-order-num huoba-cell-line">
          <span>订单编号：3456998</span>
          <span class="huoba-cell-copy">复制</span>
        </div>
        <div class="huoba-cell-paytime huoba-cell-line">下单时间：2019-2-13 20:34:34</div>
        <div class="huoba-cell-separate huoba-cell-line"></div>
        <div class="huoba-cell-payway huoba-cell-line">下单方式：微信支付</div>
        <div class="huoba-cell-paytime huoba-cell-line">支付时间：2019-2-13 20:34:34</div>
      </div>
      <van-tag mark>单元格八</van-tag>
      <div class="huoba-cell huoba-cell-eight">
        <div class="huoba-cell-left">发票类型：</div>
        <div class="huoba-cell-mid">
          <span>电子普通发票</span>
        </div>
      </div>
      <div class="huoba-cell huoba-cell-eight">
        <div class="huoba-cell-left">发票内容：</div>
        <div class="huoba-cell-mid">
          <span>商品明细</span>
        </div>
      </div>
      <div class="huoba-cell huoba-cell-eight">
        <div class="huoba-cell-left">抬头内容：</div>
        <div class="huoba-cell-mid">
          <van-radio-group v-model="radio_state">
            <van-radio name="1">
              <svg
                :class="props.checked ? 'icon check':'icon'"
                aria-hidden="true"
                slot="icon"
                slot-scope="props"
              >
                <use :xlink:href="props.checked ? '#icon-radio-block' : '#icon-guanbi'" />
              </svg>
              个人
            </van-radio>
            <van-radio name="2">
              <svg
                :class="props.checked ? 'icon check':'icon'"
                aria-hidden="true"
                slot="icon"
                slot-scope="props"
              >
                <use :xlink:href="props.checked ? '#icon-radio-block' : '#icon-guanbi'" />
              </svg>
              单位
            </van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="huoba-cell huoba-cell-eight">
        <div class="huoba-cell-left">抬头内容：</div>
        <div class="huoba-cell-mid">
          <input type="text" placeholder="请填写单位名称" />
        </div>
      </div>
    </article>
    <!-- tab标签页切换 -->
    <article id="tabs">
      <p>tab标签页</p>
      <van-tabs>
        <van-tab title="全部">全部</van-tab>
        <van-tab title="待付款">待付款</van-tab>
        <van-tab title="待发货">待发货</van-tab>
        <van-tab title="已完成">已完成</van-tab>
      </van-tabs>
    </article>
    <!-- 上拉菜单加单选框 -->
    <article id="selectRdio">
      <p>上拉菜单加单选框</p>
      <div style="margin-left:15px;" @click="open">点击触发</div>
    </article>
    <van-popup v-model="show" position="bottom">
      <div class="huoba-selectRadio-title">
        <span>退款原因</span>
      </div>
      <div class="huoba-selectRadio-content">
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell title="不喜欢 / 不想要" clickable @click="radio == '1'">
              <van-radio name="1" checked-color="#F05654" />
            </van-cell>
            <van-cell title="空包裹" clickable @click="radio == '2'">
              <van-radio name="2" checked-color="#F05654" />
            </van-cell>
            <van-cell title="快递一直未送到" clickable @click="radio == '3'">
              <van-radio name="3" checked-color="#F05654" />
            </van-cell>
            <van-cell title="快递无跟踪记录" clickable @click="radio == '4'">
              <van-radio name="4" checked-color="#F05654" />
            </van-cell>
            <van-cell title="货物破损已拒签" clickable @click="radio == '5'">
              <van-radio name="5" checked-color="#F05654" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
      <div class="huoba-selectRadio-bottom">
        <button class="huoba-btn huoba-btn-three" @click="close">关闭</button>
      </div>
    </van-popup>
    <!-- 步骤条 -->
    <article id="steps">
      <p>步骤条</p>
      <van-tag mark>物流信息</van-tag>
      <div class="huoba-logtic-info">
        <van-steps direction="vertical" :active="0" active-color="#F05654">
          <van-step>
            <template slot="active-icon">
              <span class="huoba-refund-step-icon"></span>
            </template>
            <div>【浙江省杭州市第五公司】已收入,派件员：刘海虎，下一站余 杭区三墩</div>
            <div class="logtic-time">2016-07-12 12:40</div>
          </van-step>
          <van-step>
            <div>您的订单出库中</div>
            <div class="logtic-time">2016-07-11 10:00</div>
          </van-step>
          <van-step>
            <div>拣货完成，等待快递揽收</div>
            <div class="logtic-time">2016-07-10 09:30</div>
          </van-step>
        </van-steps>
      </div>
      <van-tag mark>退款进度</van-tag>
      <div class="huoba-refund-step">
        <van-steps direction="vertical" :active="0" active-color="#F05654">
          <van-step>
            <template slot="active-icon">
              <span class="huoba-refund-step-icon"></span>
            </template>
            <div class="huoba-refund-step-title">退款成功</div>
            <div class="huoba-refund-step-content">
              商家已经同意您的退款申请，退款金额将原路退回。
              <br />预计3个工作日内到账，请您注意查收~
            </div>
            <div class="huoba-refund-step-imgs">
              <div class="huoba-refund-step-img">
                <div class="ratioBox">
                  <div class="box">
                    <img
                      src="https://file.mhuoba.com/shop/7/100032/picture/pages/20200416/19/20200416190202370.png"
                      alt
                    />
                  </div>
                </div>
              </div>
              <div class="huoba-refund-step-img">
                <div class="ratioBox">
                  <div class="box">
                    <img
                      src="https://file.mhuoba.com/shop/7/100032/picture/pages/20200416/19/20200416190202370.png"
                      alt
                    />
                  </div>
                </div>
              </div>
              <div class="huoba-refund-step-img">
                <div class="ratioBox">
                  <div class="box">
                    <img
                      src="https://file.mhuoba.com/shop/7/100032/picture/pages/20200416/19/20200416190202370.png"
                      alt
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="huoba-refund-step-time">2019-03-14 12:12:38</div>
          </van-step>
          <van-step>
            <template slot="active-icon">
              <span class="icon"></span>
            </template>
            <div class="huoba-refund-step-title">修改申请</div>
            <div class="huoba-refund-step-content">
              退款类型：仅退款
              <br />货物状态：已收到货
              <br />退款原因：少件/漏发/误发
              <br />退款金额：￥15.80
              <br />退款说明 ：无
            </div>
            <div class="huoba-refund-step-imgs"></div>
            <div class="huoba-refund-step-time">2019-03-14 12:12:38</div>
          </van-step>
          <van-step>
            <template slot="active-icon">
              <span class="icon"></span>
            </template>
            <div class="huoba-refund-step-title">等待审核</div>
            <div class="huoba-refund-step-content">
              商家预计将会在5个工作日内处理。
              <br />如果退款申请被拒绝，您可以尝试修改申请后再次发起，客服会重新处理。
              <br />请勿点击任何渠道发送的退款链接，以保证财产安全。
            </div>
            <div class="huoba-refund-step-imgs"></div>
            <div class="huoba-refund-step-time">2019-03-14 12:12:38</div>
          </van-step>
          <van-step>
            <template slot="active-icon">
              <span class="icon"></span>
            </template>
            <div class="huoba-refund-step-title">提交申请</div>
            <div class="huoba-refund-step-content">
              退款类型：仅退款
              <br />货物状态：已收到货
              <br />退款原因：少件/漏发/误发
              <br />退款金额：￥15.80
              <br />退款说明 ：无
            </div>
            <div class="huoba-refund-step-imgs"></div>
            <div class="huoba-refund-step-time">2019-03-14 12:12:38</div>
          </van-step>
        </van-steps>
      </div>
    </article>
    <!-- 选择器 -->
    <article id="picker">
      <p>选择器</p>
      <van-tag mark>选择器</van-tag>
      <div style="padding:10px 15px;" @click="picker_show = true">点击触发</div>
      <van-popup v-model="picker_show" position="bottom">
        <van-picker :columns="columns" show-toolbar title="物流公司" @cancel="picker_show = false" @confirm="onConfirm" />
      </van-popup>
    </article>
  </div>
</template>
<style>
#button .buttons .huoba-btn {
  margin-right: 10px;
}
.compents-container {
  padding: 10px 0;
  background-color: #f5f5f5;
}
.compents-container p {
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px #355872 solid;
  padding: 20px 10px;
}
.compents-container .head {
  margin-left: 15px;
}
</style>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      redDark: "#F05654",
      redLight: "#F69A98",
      cl3: "#333",
      cl6: "#666",
      cl9: "#999",
      clE5: "#e5e5e5",
      clF5: "#f5f5f5",
      clF: "#fff",
      orangeLight: "#f08054",
      is_checked: 0,
      show: false,
      picker_show: false,
      radio: "0",
      swiperOption: {
        slidesPerView: "auto"
      },
      value: "",
      radio_state: "1",
      columns: ["顺丰速递", "中通速递", "圆通速递", "韵达快递", "其他"]
    };
  },
  props: {
    msg: String
  },
  methods: {
    checkGoods() {
      this.is_checked ? (this.is_checked = 0) : (this.is_checked = 1);
    },
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
    onSearch() {},
    onConfirm(){
    }
  }
};
</script>