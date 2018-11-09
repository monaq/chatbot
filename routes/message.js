var express = require("express");
var router = express.Router();

/* 사용자의 답장이 들어왔을 때 */
router.post("/", function(req, res, next) {
  const object = {
    // 1
    user_key: req.body.user_key, // 메시지를 발송한 user을 식별할 수 있는 key
    type: req.body.type, // user가 보낸 message의 형태. text , photo로 이루어짐
    content: req.body.content // user가 보낸 메시지 내용.
  };
  const menu = {
    //2
    type: "buttons",
    buttons: ["안녕", "이자식이?"]
  };
  var res_object; //3
  if (object.type === "text") {
    if (object.content === "안녕") {
      //4
      res_object = {
        message: {
          text: "안녕 뽀뽀좀 해줘봐!"
        },
        keyboard: menu
      };
    } else if (object.content === "이자식이?") {
      //5
      res_object = {
        message: {
          text: "인사가 박하구나."
        },
        keyboard: menu
      };
    } else {
      res_object = {
        message: {
          text: object.content
        },
        keyboard: menu
      };
    }
  }
  res
    .set({
      //6
      "content-type": "application/json"
    })
    .send(JSON.stringify(res_object));
});

module.exports = router;
