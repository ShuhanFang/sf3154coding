//gallery button
const filterImages = (category) => {
  const items = document.querySelectorAll('#gallery .grid .item');
  items.forEach((item) => {
    const categoryArray = item.querySelector('img').dataset.category.split(' ');
    if (category === 'all' || categoryArray.includes(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
};

const filters = document.querySelectorAll('.filters button');
filters.forEach((btn) => {
  btn.addEventListener('click', () => {
    filters.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    filterImages(btn.dataset.filter);
  });
});


 
// 获取图片元素和选择结果的div元素
const images = document.querySelectorAll('.grid img');
const selectedImages = document.getElementById('selected-images');

function decideTodayMenu() {
  // 随机选择三张图片
  const randomImages = [];
  while (randomImages.length < 3) {
    const randomIndex = Math.floor(Math.random() * images.length);
    if (!randomImages.includes(images[randomIndex])) {
      randomImages.push(images[randomIndex]);
    }
  }

  // 在选择结果的div中显示选中的图片和菜肴名字，并添加动画效果
  selectedImages.innerHTML = '';
  randomImages.forEach((img) => {
    const container = document.createElement('div');
    container.style.margin = '5px 0'; // 调整容器间距

    const captionContainer = document.createElement('div');
    captionContainer.style.display = 'flex';
    captionContainer.style.flexDirection = 'row'; // 设置为水平排列

    const imgContainer = document.createElement('div');
    imgContainer.style.marginRight = '10px'; // 调整图片和介绍文本的间距


    // 添加图片
    
    const clonedImg = img.cloneNode(true);
clonedImg.style.objectFit = 'cover';
clonedImg.classList.add('my-custom-image-class'); // 添加自定义类名
imgContainer.appendChild(clonedImg);


    // 添加介绍文本
    const interpretations = img.parentElement.querySelector('.interpretations');
    if (interpretations) {
      const introDiv = document.createElement('div');
      introDiv.classList.add('intro');
      introDiv.innerText = interpretations.innerText;

      introDiv.style.overflow = 'hidden'; // 隐藏溢出部分
      captionContainer.appendChild(imgContainer);
      captionContainer.appendChild(introDiv);
    }

    // 添加菜肴名字caption和图片容器
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.innerText = img.alt;
    captionContainer.appendChild(nameDiv);

    container.appendChild(captionContainer);
    selectedImages.appendChild(container);

    // 添加动画效果
    container.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000 });
  });

  // 将选中的图片和菜肴名字移动到网页最上面
  selectedImages.scrollIntoView({ behavior: 'smooth' });

  // 设置选择结果的div为水平排列
  selectedImages.style.display = 'flex';
  selectedImages.style.flexDirection = 'column';
}



// 将函数绑定到按钮的点击事件上
const decideButton = document.getElementById('decide-button');
decideButton.addEventListener('click', decideTodayMenu);


//点击图片时有文字介绍
const items = document.querySelectorAll('.item');
items.forEach(item => {
  const img = item.querySelector('img');
  const interpretations = item.querySelector('.interpretations');

  img.addEventListener('click', () => {
    interpretations.style.display = interpretations.style.display === 'none' ? 'block' : 'none';
  });
});



  