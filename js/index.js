/**
 * Created by JSNoob on 2017/7/12.
 */
//�ܸ�ѡ��
var checkedThis = document.getElementById("checkedThis");
var area = document.getElementById("area");
var inputsAll = area.getElementsByTagName("input");
checkedThis.onclick = function () {
    for (var i = 1; i < inputsAll.length; i++) {
        inputsAll[i].checked = checkedThis.checked;
    }
}

//��һ����
var checkAllSon1 = document.getElementById("checkAllSon1");
var dd1 = document.getElementById("dd1");
var inputsAllson1 = dd1.getElementsByTagName("input");
checkAllSon1.onclick = function () {
    for (var i = 1; i < inputsAllson1.length; i++) {
        inputsAllson1[i].checked = checkAllSon1.checked;
    }
    //�ж��ܸ�ѡ���Ƿ�Ӧ�ñ�ѡ��
    if (checkAllSon1.checked == true && checkAllSon2.checked == true) {
        checkedThis.checked = true;
    } else {
        checkedThis.checked = false;
    }
}
for (var i = 1; i < inputsAllson1.length; i++) {
    inputsAllson1[i].onclick = function () {
        var flag = true;//���趼��ѡ����
        for (var i = 1; i < inputsAllson1.length; i++) {
            if (inputsAllson1[i].checked == false) {
                flag = false;
            }
        }
        checkAllSon1.checked = flag;
        //�ж��ܸ�ѡ���Ƿ�Ӧ�ñ�ѡ��
        if (checkAllSon1.checked == true && checkAllSon2.checked == true) {
            checkedThis.checked = true;
        } else {
            checkedThis.checked = false;
        }
    }

}
//�ڶ�����
var checkAllSon2 = document.getElementById("checkAllSon2");
var dd2 = document.getElementById("dd2");
var inputsAllson2 = dd2.getElementsByTagName("input");
checkAllSon2.onclick = function () {
    for (var i = 1; i < inputsAllson2.length; i++) {
        inputsAllson2[i].checked = checkAllSon2.checked;
    }
    //�ж��ܸ�ѡ���Ƿ�Ӧ�ñ�ѡ��
    if (checkAllSon1.checked == true && checkAllSon2.checked == true) {
        checkedThis.checked = true;
    } else {
        checkedThis.checked = false;
    }
}
for (var i = 1; i < inputsAllson2.length; i++) {
    inputsAllson2[i].onclick = function () {
        var flag = true;//���趼��ѡ����
        for (var i = 1; i < inputsAllson2.length; i++) {
            if (inputsAllson2[i].checked == false) {
                flag = false;
            }
        }
        checkAllSon2.checked = flag;
        //�ж��ܸ�ѡ���Ƿ�Ӧ�ñ�ѡ��
        if (checkAllSon1.checked == true && checkAllSon2.checked == true) {
            checkedThis.checked = true;
        } else {
            checkedThis.checked = false;
        }
    }
}

//tab�л�
var top_nav = document.getElementById("top_nav");
var topLis = top_nav.getElementsByTagName("li");
var li1 = document.getElementById("li1");
var li2 = document.getElementById("li2");
var li3 = document.getElementById("li3");
var listLis = [li1, li2, li3];
for (var i = 0; i < topLis.length; i++) {
    topLis[i].index = i;
    topLis[i].onclick = function () {
        var index = this.index;
        for (var i = 0; i < listLis.length; i++) {
            listLis[i].className = "";
        }
        listLis[index].className = "cur";
    }
}

















