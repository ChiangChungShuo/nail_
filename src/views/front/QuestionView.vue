<template>
  <div class="container">
    <div class="row">
      <h1 style="text-align: center; font-size: 50px" class="my-4">常見問題</h1>
      <div>
        <swiper
          :slides-per-view="1"
          :space-between="50"
          :modules="modules"
          navigation
          :pagination="{ clickable: true }"
        >
          <swiper-slide>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://images.pexels.com/photos/3273490/pexels-photo-3273490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    class="img-fluid"
                    alt="img"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="card-title">【美甲小知識】</h3>
                    <p
                      class="card-text"
                      style="line-height: 40px; font-size: 24px"
                    >
                      正確維持光療指甲壽命 💅🏻手部期限3~4週🦶🏻足部期限6~8週
                      指甲與凝膠會有厚度落差，做事時容易碰撞與耗損，會使凝膠分開。
                      一旦跑進空氣、水、油、髒汙，容易形成『發霉』。
                      所以光療凝膠不是『撐』越久越好，時間到要記得回來『卸甲』，
                      才不會讓指甲變得容易折斷受損。
                    </p>
                  </div>
                  <div style="text-align: center">
                    <p class="card-text">
                      <small class="text-muted"
                        >🧡預約詢問請私訊官方Line @285fyfqx</small
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://images.pexels.com/photos/851219/pexels-photo-851219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    class="img-fluid"
                    alt="img"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="card-title">【美甲小知識】</h3>
                    <p
                      class="card-text"
                      style="line-height: 40px; font-size: 24px"
                    >
                      光療又稱凝膠指甲，凝膠是需要照射美甲燈，依序步驟搭配各種不同性質凝膠而做出凝膠美甲。
                      指甲油跟凝膠成分不同，指甲油擦上指甲後會自然乾，因此不用照燈。
                      凝膠則是由樹脂成分而成，並需要透過led燈照射。
                    </p>
                  </div>
                  <div style="text-align: center">
                    <p class="card-text">
                      <small class="text-muted"
                        >🧡預約詢問請私訊官方Line @285fyfqx</small
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://images.pexels.com/photos/2894639/pexels-photo-2894639.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    class=""
                    alt="img"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="card-title">【美甲小知識】</h3>
                    <p
                      class="card-text"
                      style="line-height: 40px; font-size: 24px"
                    >
                      隨著指甲慢慢留長，凝膠美甲與真指甲之間較容易因水氣或碰撞等因素，而出現小縫隙、開始分離，此時便是卸甲的絕佳時機，以免使分離情形更加嚴重。此外，記得要尋求專業美甲師依正確步驟來卸除，不要自行將凝膠美甲拔掉或掀開，非常容易造成真甲的甲面受損唷！
                    </p>
                  </div>
                  <div style="text-align: center">
                    <p class="card-text">
                      <small class="text-muted"
                        >🧡預約詢問請私訊官方Line @285fyfqx</small
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="accordion my-5" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              光療/凝膠美甲可以維持多久呢 ?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              凝膠美甲正常是可以維持3-4週左右,如果是軟甲、薄甲維持度大約12週左右,
              凝膠美甲維持度實際要依照每個人指甲狀況而定。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              請問凝膠指甲會傷害真甲嗎 ?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              正常是不會的，除非操作不當或卸甲不當傷害到真甲,讓真甲變薄變軟,才真的會讓真甲受傷。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              做一次凝膠美甲大概要花多久時間
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              依款式的難易度大概在2-3小時不等
              ,美甲從前置保養到製作照光都需要一定時間,建議女孩們可以先告訴美甲師想要製作的款式類型,讓她們能幫您預估製作的時間。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              指甲太短的人可以做嗎？
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse show"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              當然可以喔!專業美甲師是可以依照甲面大小做設計上的變化,但仍建議女孩可以留2-3週的指甲不要修剪。如果短指甲的女孩想要改善,也可以靠長期製作凝膠美甲做增厚養甲的動作
              ，只要懂得保養與照顧，短甲女孩擁有修長美麗的指甲絕對不是夢。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="true"
              aria-controls="collapseFive"
            >
              懷孕的媽咪可以做指甲彩繪嗎?
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse show"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              本店使用日本、韓國品牌凝膠、歐美天然有機產品，孕婦小孩都可以使用，無毒無味。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSix">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="true"
              aria-controls="collapseSix"
            >
              光療可以用去光水卸甲嗎?
            </button>
          </h2>
          <div
            id="collapseSix"
            class="accordion-collapse collapse show"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              不行的哦!!如果真的沒時間回來御甲,可以等指甲長長直接用指甲刀剪指尖,其他
              讓它自然剝落,但不美觀就是了, 千萬不可以用摳的!!指面會受傷喔!!
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSeven">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="true"
              aria-controls="collapseSeven"
            >
              哪種情況的指甲不能做光療美甲呢?
            </button>
          </h2>
          <div
            id="collapseSeven"
            class="accordion-collapse collapse show"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              灰指甲、甲炎、富貴手等症狀,請先行就醫,恕無法進行美甲服務。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingEight">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="true"
              aria-controls="collapseEight"
            >
              做美甲照的燈會讓手曬黑嗎？
            </button>
          </h2>
          <div
            id="collapseEight"
            class="accordion-collapse collapse show"
            aria-labelledby="headingEight"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              照燈的目的是用來固定光療膠,一般照射時間大約在1-3分鐘。【 Morizanko
              】使用日本NO.1品牌Presto專用LED燈
              ，通過日本安全綠色光源檢測，安全的無紫外線可視光，不會曬黑
              女孩的白皙玉手。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  data() {
    return {
      modules: [Navigation, Pagination],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>


<style scoped>
.swiper {
  width: 100%;
  height: auto;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
