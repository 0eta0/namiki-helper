<template>
  <div class="rank-container">
    <div class="rank-cell" v-for="(value, index) in ranking" :key="index">
      <div class="rank-cell-rank">{{index+1}}</div>
      <img class="rank-cell-rank-crown" src="../assets/crown_1.png" v-if="index === 0">
      <img class="rank-cell-rank-crown" src="../assets/crown_2.png" v-if="index === 1">
      <div class="rank-cell-name">{{value.Name}}</div>
      <div class="rank-cell-coin">{{value.Sumofcoin}}</div>
    </div>
  </div>
</template>

<script>
import api from '../js/api.js'

export default {
  data () {
    return {
      ranking: [
        // {
        //   "name": "FumitoHaga",
        //   "someofcoin": 1000000000
        // },
        // {
        //   "name": "b",
        //   "someofcoin": 100
        // },
        // {
        //   "name": "c",
        //   "someofcoin": 100
        // },
        // {
        //   "name": "d",
        //   "someofcoin": 100
        // },
        // {
        //   "name": "e",
        //   "someofcoin": 100
        // },
        // {
        //   "name": "f",
        //   "someofcoin": 100
        // },
        // {
        //   "name": "g",
        //   "someofcoin": 100
        // },
        // {
        //   "name": "h",
        //   "someofcoin": 100
        // },
        // {
        //   "name": "i",
        //   "someofcoin": 100
        // },
        // {
        //   "name": "j",
        //   "someofcoin": 100
        // }
      ]
    }
  },
  created () {
    api.getRanking().then(res => {
      if (res !== null && res.result !== 'false') {
        this.ranking = res
      }
    })
    console.log(this.ranking)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.rank-container {
  height: 100%;
  width: 100%;
  padding: 0 0 20px 0;
}

.rank-cell-rank-crown {
  position: absolute;
  height: 50px;
  width: 50px;
  margin: -30px 0 0 25px;
  transform: rotate(30deg);
}

.rank-cell {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100px;
  width: 100%;
  color: black;
  font-size: 40px;
  border-bottom: solid 1px grey;
  @media screen and (max-width: 600px) {
    height: 80px;
  }

  .rank-cell-rank {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 55px;
    margin-left: 5px;
    border: solid 2px grey;
    border-radius: 30px;
  }

  .rank-cell-name {
    width: calc((100% - 50px) / 3 * 2);
    font-size: 0.75em;
    @media screen and (max-width: 600px) {
      font-size: 0.5em;
    }
  }

  .rank-cell-coin {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: calc((100% - 50px) / 3);
    margin-right: 5px;
    padding: 0 5px;
    color: white;
    background-color: grey;
    border-radius: 25px;
    font-size: 0.5em;
    font-size-adjust: 0.56;
    @media screen and (max-width: 600px) {
      width: calc((100% - 50px) / 3);
    }
  }
}
</style>
