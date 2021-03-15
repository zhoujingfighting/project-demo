section {
  position: relative;
  margin-top: 200px;
  width: 400px;
  height: 400px;
  margin: auto;
  margin-top: 200px;
  border-radius: 50%;
}

section > div.zj {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: url(iu.jpg);
  opacity: 1;
  background-size: cover;
  opacity: 0.22;
}

section > span {
  position: absolute;
  font-size: 30px;
  color: pink;
  top: -80px;
  left: 140px;
}

.total {
  box-sizing: content-box;
  background-repeat: no-repeat;
  position: absolute;
  margin: auto;
  left: 0;
  top: 0;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  box-shadow: 0 0 0 10px hotpink;
}

.total > span {
  position: absolute;
  top: 0;
  color: hotpink;
  left: 0;
  font-size: 32px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}

.total > span:nth-child(1) {
  top: 190px;
  left: 380px;
}

.total > span:nth-child(2) {
  top: 375px;
  left: 190px;
}

.total > span:nth-child(3) {
  top: 190px;
  left: 0px;
}

.total > span:nth-child(4) {
  top: 5px;
  left: 185px;
}

.total i:nth-of-type(1) {
  display: inline-block;
  position: absolute;
  width: 30px;
  height: 30px;
  text-align: center;
  left: 185px;
  top: 185px;
  color: pink;
  animation: rota 18s linear infinite;
}

.total .seconds {
  width: 400px;
  height: 400px;
  position: absolute;
  top: 0px;
  left: 0;
  background: none;
  transform-origin: 200px 200px;
  animation: rota 60s steps(60) infinite;
}

.total .seconds .second1 {
  position: absolute;
  background-color: deeppink;
  width: 2px;
  height: 200px;
  top: 30px;
  left: 199px;
  transform-origin: 1px 170px;
  animation: seconds 1s ease-out  infinite;
}

.total div {
  box-sizing: content-box;
  width: 2px;
  height: 20px;
  top: 0;
  background-color: hotpink;
  border-radius: 50%;
  position: absolute;
  left: 200px;
  transform-origin: 0 200px;
}

.total div:nth-of-type(2) {
  background-color: lightcoral;
  position: absolute;
  width: 5px;
  height: 140px;
  top: 90px;
  left: 197.5px;
  border-radius: 40%;
  transform-origin: 2.5px 110px;
  animation: rota 3600s linear infinite;
}

.total div:nth-of-type(3) {
  background-color: violet;
  position: absolute;
  width: 8px;
  height: 90px;
  border-radius: 30%;
  top: 140px;
  left: 196px;
  transform-origin: 4px 60px;
  animation: rota 43200s linear infinite;
}

.total div:nth-of-type(4) {
  transform: rotate(30deg);
}

.total div:nth-of-type(5) {
  transform: rotate(60deg);
}

.total div:nth-of-type(6) {
  transform: rotate(120deg);
}

.total div:nth-of-type(7) {
  transform: rotate(150deg);
}

.total div:nth-of-type(8) {
  transform: rotate(210deg);
}

.total div:nth-of-type(9) {
  transform: rotate(240deg);
}

.total div:nth-of-type(10) {
  transform: rotate(300deg);
}

.total div:nth-of-type(11) {
  transform: rotate(330deg);
}

@keyframes rota {
  to {
    transform: rotate(360deg);
  }
}

@keyframes seconds {
  from {
    transform: rotate(0);
  }
  5% {
    transform: rotate(-1deg);
  }
  15% {
    transform: rotate(1deg);
  }
  20% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}