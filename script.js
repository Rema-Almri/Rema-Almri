document.getElementById("borrowForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const studentName = document.getElementById("studentName").value;
    const trainingNumber = document.getElementById("trainingNumber").value;
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const borrowDate = document.getElementById("borrowDate").value;
    const returnDate = document.getElementById("returnDate").value;

    const detailsList = document.getElementById("borrowDetails");
    detailsList.innerHTML = `
        <li>اسم المتدربة: ${studentName}</li>
        <li>الرقم التدريبي: ${trainingNumber}</li>
        <li>اسم الكتاب المستعار: ${bookName}</li>
        <li>اسم المؤلف: ${authorName}</li>
        <li>تاريخ الاستعارة: ${borrowDate}</li>
        <li>تاريخ الإرجاع: ${returnDate}</li>
    `;

    document.getElementById("displayData").style.display = "block";
});