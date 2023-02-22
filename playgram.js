const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let next;
let range;
let index = 0;

function typing(){
    setInterval(() => {
        if(index >= range){
            index = -1;
        }
        if(index != -1){
            next = document.getElementsByTagName('ruby');
            range = next.length;

            document.dispatchEvent(new KeyboardEvent("keydown", {keycode:code(next[index].innerHTML[0]),charcode:0,key: next[index].innerHTML[0].toLowerCase(), code: 'Key' + next[index].innerHTML[0]}));
            document.dispatchEvent(new KeyboardEvent("keypress", {keycode:code(next[index].innerHTML[0]),charcode:0,key: next[index].innerHTML[0].toLowerCase(), code: 'Key' + next[index].innerHTML[0]}));
            document.dispatchEvent(new KeyboardEvent("keyup", {keycode:code(next[index].innerHTML[0]),charcode:0,key: next[index].innerHTML[0].toLowerCase(), code: 'Key' + next[index].innerHTML[0]}));
        }
        
        if(index >= range){
            index = -1;
        }else{
            index++;
        }
    }, 100);
};

function code(a){
    return abc.indexOf(a) + 65;
};
typing();
