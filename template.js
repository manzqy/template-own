/**
 * 模板生成
 * @param { string } id id选择器
 * @param { object } data 对象数据
 * 配合标签可以返回html标签内容
 */
function template(id, data) {
    let dom = document.querySelector("#" + id);
    let content = dom.innerHTML;
    let reg = /{{(\w+)}}/;
    let result = reg.exec(content);
    while(result) {
        content = content.replace(result[0],data[result[1]]);
        result = reg.exec(content);
    }
    return content;
}