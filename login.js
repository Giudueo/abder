addEventListener('submit', function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // قائمة بأسماء المستخدمين وكلمات المرور
    const users = [
        { username: "admin", password: "1234" },
        { username: "wld 9ism", password: "a0000" },
        { username: "user2", password: "password2" }
    
    
        
    ];

    // التحقق من صحة بيانات تسجيل الدخول
    const isValidUser = users.some(user => user.username === username && user.password === password);

    if (isValidUser) {
        // إعادة التوجيه إلى الصفحة الرئيسية
        window.location.href = "home.html";
    } else {
        // عرض رسالة خطأ
        const errorElement = document.getElementById('error');
        errorElement.style.display = 'block';
        errorElement.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة";
    }
});


