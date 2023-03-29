<template>
  <div class="container">
    <nav aria-label="breadcrumb" class="mt-3">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">首頁</a></li>
        <li class="breadcrumb-item active" aria-current="page">最新消息</li>
      </ol>
    </nav>
    <h1
      style="font-size: 50px; text-align: center; color: #4e6752"
      class="my-4"
    >
      最新消息
    </h1>
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            style="height: 275px"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676584071318.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lpf3C1%2F2mtC8DlCQwSUTyiI5J5s5tH8kL1t5xkh6jzQIoq5nuVnghoLYfxdtvEk3CuRsbb6iMxlbE5fUOf3BeOgWmFFl6j%2Fd8PMT1ieomE%2FXCgmGb1yQp%2FjBrJYQF25iHMWM%2FoJmqbmGPFzdALk5hUxUH4e5d5tDZs2Ezgf1DJHupv9HkrSx6GUaHZWR8cZHBHIYiQqlA%2FWTyahby2EGbAE74q1%2B53vSpo7WlIaD2Mv5xmHfVYogLq7QJ9NJmE1HMM7DDT3fRe9TNaWwWwSj%2BUWQKLGB16qPx7sa6IqNDNo0adRUqxP7MNhPPIZDwJI141mEDEz07Y7toOg%2FgZy4hQ%3D%3D"
            class="card-img-top object-cover"
            alt="img"
          />
        </div>
        <div class="col-md-8 p-4">
          <div class="card-body d-flex justify-content-between">
            <h5 class="card-title">聖誕優惠</h5>
            <p>2023/02/13</p>
          </div>
          <div
            class="card-body d-flex justify-content-between"
            style="align-items: end"
          >
            <p class="card-text" style="line-height: 30px; font-size: 14px">
              聖誕指定款優惠價
              <br />
              全部NT$999
            </p>
            <router-link to="/new">
              <button
                type="button
"
                style="width: 90px; height: 35px"
                class="btn btn-primary mt-5"
              >
                了解詳情
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://i.imgur.com/pAIIwfL.jpg"
            class="card-img-top object-cover"
            style="height: 275px"
            alt="img"
          />
        </div>
        <div class="col-md-8 p-4">
          <div class="card-body d-flex justify-content-between">
            <h5 class="card-title">公開標記分享</h5>
            <P>2023/02/12</P>
          </div>
          <div
            class="card-body d-flex justify-content-between"
            style="align-items: end"
          >
            <p class="card-text" style="line-height: 30px; font-size: 14px">
              下次預約出示限動po文、享50元折扣 單色、純卸甲不再活動範圍
              <br />
              追蹤morizanko「臉書」及「IG」帳號
            </p>
            <router-link to="/new">
              <button
                type="button"
                style="width: 90px; height: 35px"
                class="btn btn-primary mt-5"
              >
                了解詳情
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            style="height: 275px"
            src="https://i.imgur.com/CULcimM.jpg"
            class="card-img-top object-cover"
            alt="img"
          />
        </div>
        <div class="col-md-8 p-4">
          <div class="card-body d-flex justify-content-between">
            <h5 class="card-title">公開標記分享</h5>
            <P>2023/02/12</P>
          </div>
          <div
            class="card-body d-flex justify-content-between"
            style="align-items: end"
          >
            <p class="card-text" style="line-height: 30px; font-size: 14px">
              下次預約出示限動po文、享50元折扣 單色、純卸甲不再活動範圍
              <br />
              追蹤morizanko「臉書」及「IG」帳號
            </p>
            <router-link to="/new">
              <button
                type="button"
                style="width: 90px; height: 35px"
                class="btn btn-primary mt-5"
              >
                了解詳情
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
