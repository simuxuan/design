class Dialog{
  constructor(options) {
    this.title = options.title||'标题';
    this.content = options.content||'内容';
    this.onConfirm = options.onConfirm||this.hide;
    this.onCancel = options.onCancel||this.hide;
    this.init();
    this.initEventHandler();
  }
  // 绘制对话框---模板
  init() {
    this.panel=document.createElement('div');
    this.panel.className='dialog';

    this.titleP=document.createElement('p');
    this.titleP.innerHTML=this.title;
    this.panel.appendChild(this.titleP);

    this.contentP=document.createElement('p');
    this.contentP.innerHTML=this.content;
    this.panel.appendChild(this.contentP);

    this.confirmBtn=document.createElement('button');
    this.confirmBtn.className='button confirm-button';
    this.confirmBtn.innerHTML='确定';
    this.panel.appendChild(this.confirmBtn);

    this.cancelBtn=document.createElement('button');
    this.cancelBtn.className='button cancel-button';
    this.cancelBtn.innerHTML='取消';
    this.panel.appendChild(this.cancelBtn);

    document.body.appendChild(this.panel);
  }
  this.onConfirm();
  this.hide();
});
this.cancelBtn.addEventListener('click',() => {
  this.onCancel();
  this.hide();
});
}
show() {
  this.panel.style.display='block';
}
hide() {
  this.panel.style.display='none';
}
}
// 子类去重写--这里删去了title
class ContentDialog extends Dialog{
  init() {
    super.init();
    // 好莱坞原则
    this.titleP.parentNode.removeChild(this.titleP);
  }
}

class ConfirmDialog extends Dialog{
  init() {
    super.init();
    this.cancelBtn.parentNode.removeChild(this.cancelBtn);
  }
}