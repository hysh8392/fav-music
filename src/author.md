---
layout: page
title: 僕について
image: /assets/img/fav-music-author.png
---
yasu ([@hysh8392 <i class="fas fa-external-link-alt"></i>](https://twitter.com/hysh8392/){:target="_blank"})

東京在住の音楽好きな Web エンジニアです

<div class="row my-5">
  <div class="col-md-12 col-lg-6 mt-3">
    <canvas id="musicChart" width="300" height="300"></canvas>
  </div>
  <div class="col-md-12 col-lg-6 mt-3">
    <canvas id="techChart" width="300" height="300"></canvas>              
  </div>
</div>
<script>
  document.addEventListener('DOMContentLoaded', function (event) {
    // 音楽的嗜好
    new Chart($("#musicChart"), {
      type: 'doughnut',
      data: {
        labels: [
          'ネオアコ／ギターポップ',
          'アニメ',
          'アイドル',
          'K-Pop',
          'J-Pop',
          'J-Rock',
          'Pop',
          'Rock'
        ],
        datasets: [
          {
            data: [
              10,
              20,
              20,
              10,
              15,
              15,
              5,
              5
            ],
            backgroundColor: [
              '#E57373',
              '#BA68C8',
              '#7986CB',
              '#4FC3F7',
              '#4DB6AC',
              '#AED581',
              '#FFF176',
              '#FFB74D'
            ]              
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: '音楽的嗜好'
        }
      }
    });
    // 技術的嗜好
    new Chart($("#techChart"), {
      type: 'doughnut',
      data: {
        labels: [
          'C#',
          'Java',
          'Ruby',
          'Markdown',
          'HTML',
          'CSS',
          'JavaScript',
          'SQL'
        ],
        datasets: [
          {
            data: [
              5,
              5,
              10,
              20,
              15,
              15,
              20,
              10
            ],
            backgroundColor: [
              '#E57373',
              '#BA68C8',
              '#7986CB',
              '#4FC3F7',
              '#4DB6AC',
              '#AED581',
              '#FFF176',
              '#FFB74D'
            ]              
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: '技術的嗜好'
        }
      }
    });
  });
</script>
