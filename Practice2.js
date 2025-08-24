function myFunction() {
    const select = document.getElementById('options');
    const tshirt = document.getElementById('one');
    const jeans = document.getElementById('two');
    const headphones = document.getElementById('three');
    const smartphone = document.getElementById('four');
    const novel = document.getElementById('five');
    const cookbook = document.getElementById('six');
  
    const value = select.value;
  
    tshirt.style.display = 'none';
    jeans.style.display = 'none';
    headphones.style.display = 'none';
    smartphone.style.display = 'none';
    novel.style.display = 'none';
    cookbook.style.display = 'none';
  
    if (value === 'option-1') {
      tshirt.style.display = 'block';
      jeans.style.display = 'block';
    } else if (value === 'option-2') {
      novel.style.display = 'block';
      cookbook.style.display = 'block';
    } else if (value === 'option-3') {
      headphones.style.display = 'block';
      smartphone.style.display = 'block';
    } else if (value === 'op-0') {
      tshirt.style.display = 'block';
      jeans.style.display = 'block';
      headphones.style.display = 'block';
      smartphone.style.display = 'block';
      novel.style.display = 'block';
      cookbook.style.display = 'block';
    }
  }
  
