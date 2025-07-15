// گرفتن دکمه افزودن مخاطبین
const addContactBtn = document.getElementById("addContact");

// گرفتن لیست مخاطبین
const contactList = document.getElementById("contactList");

// وقتی که دکمه Add Contact کلیک شد
addContactBtn.addEventListener("click", function() {
  // گرفتن مقدار ورودی‌ها و حذف فاصله‌های اضافی
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  // اگر یکی از فیلدها خالی بود، هشدار بده و ادامه نده
  if (name === "" || phone === "" || email === "") {
    alert("Please fill in all fields");
    return; // خروج از تابع
  }

  // ایجاد یک عنصر جدید li برای لیست
  const li = document.createElement("li");

  // اضافه کردن کلاس‌های Bootstrap برای ظاهر بهتر
  li.className = "list-group-item d-flex justify-content-between align-items-center";

  // تعریف محتوای HTML شامل اطلاعات مخاطب و دکمه حذف داخل li
  li.innerHTML = `
    <div>
      <strong>${name}</strong> — ${phone} — ${email}
    </div>
    <button class="btn btn-danger btn-sm deleteBtn">Delete</button>
  `;

  // اضافه کردن li به داخل لیست
  contactList.appendChild(li);

  // پاک کردن مقدار فیلدهای ورودی بعد از افزودن مخاطب
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
});

// گوش دادن به کلیک روی لیست برای حذف مخاطب — به روش Delegation
contactList.addEventListener("click", function(e) {
  // اگر روی دکمه‌ای کلیک شد که کلاس deleteBtn داشت
  if (e.target.classList.contains("deleteBtn")) {
    // حذف والد li که همون مخاطبه
    e.target.parentElement.remove();
  }
});