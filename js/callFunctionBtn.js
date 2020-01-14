
    let rect=$('.rect');
    let i, b, x, y;
    let n=1;
    let ball_num = 5;
    let balls=[];
    let array=['<i class="fas fa-heart"></i>','<i class="far fa-bell"></i>','<i class="far fa-envelope"></i>','<i class="fas fa-user"></i>','<i class="far fa-comment-dots"></i>'];
    let isOpend = false;

    for (i = 0; i < ball_num; i++) {
        b = $("<div class='ball'></div>");
        x = 380+Math.cos(Math.PI*2 /ball_num*(i-1))*70;
        y = 380+Math.sin(Math.PI*2 /ball_num*(i-1))*70;

        b.append(array[i]);
        b.css({
            left: 380,
            top: 380
            });
        b.attr("data-bx",380);
        b.attr("data-by",380);
        b.attr("data-ex",Math.floor(x));
        b.attr("data-ey",Math.floor(y));
        rect.append(b);
        balls.push(b)


    }

    // 點擊按鈕後叫出指令
        $(".ball_button").click(function(){
            isOpend = !isOpend;
            let x,y;

            // 判斷現在狀態，按鈕為打開還是收合
            $(".ball_button").css("background", isOpend ? '#292E29' : '#1F0414');
            $(".ball_button").text(isOpend ? "close" : "open");
            balls.forEach(function (b,i) {
                if(isOpend){
                    x=b.attr("data-ex");
                    y=b.attr("data-ey");
                }else{
                    x=b.attr("data-bx");
                    y=b.attr("data-by");
                }
                // 跑出速度，一個接一個出現
                b.delay(80*i).animate({
                    left: x,
                    top: y
                });
            })
        });



