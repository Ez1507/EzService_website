// config.js - Nơi bạn tự do sửa thông tin
const siteConfig = {
    // Tên thương hiệu
    brandName: "Ez Service",
    tagline: "Dễ dàng hơn bạn nghĩ",
    
    // Thông tin liên hệ (Thay số của bạn vào đây)
    phone: "0938 267 586",
    phoneRaw: "0938267586",
    zalo: "0938267586",
    email: "info@ezservice.com.vn",
    address: "Tân Tâm - Nhanh chóng - Hiệu quả",
    
    // Social
    facebook: "https://facebook.com/ezservice",
    
    // Dịch vụ
    services: [
        {
            icon: "fa-passport",
            color: "blue",
            title: "Dịch vụ cho Người nước ngoài",
            subtitle: "Visa, GPLĐ, Tạm trú",
            items: [
                "Visa các loại (EV, DN, ĐT, LĐ...)",
                "Giấy phép lao động (Cấp mới, Gia hạn)",
                "Thẻ tạm trú",
                "Công văn nhập cảnh",
                "Lý lịch tư pháp",
                "Khám sức khỏe"
            ]
        },
        {
            icon: "fa-building",
            color: "green",
            title: "Dịch vụ Doanh nghiệp",
            subtitle: "Thành lập, Thay đổi, Đầu tư",
            items: [
                "Thành lập công ty mới",
                "Thay đổi Đăng ký kinh doanh",
                "Bổ sung ngành nghề",
                "Thay đổi địa chỉ, thành viên",
                "Hợp pháp hóa lãnh sự",
                "Dịch thuật công chứng"
            ]
        }
    ],
    
    // Thống kê (để tạo uy tín)
    stats: [
        { number: "500+", label: "Hồ sơ thành công" },
        { number: "5+", label: "Năm kinh nghiệm" },
        { number: "98%", label: "Khách hàng hài lòng" },
        { number: "24/7", label: "Hỗ trợ khẩn cấp" }
    ],
    
    // Quy trình làm việc
    process: [
        { step: "01", title: "Tư vấn", desc: "Liên hệ, mô tả nhu cầu. Tôi sẽ tư vấn miễn phí và báo giá rõ ràng." },
        { step: "02", title: "Xử lý hồ sơ", desc: "Bạn cung cấp giấy tờ. Tôi chuẩn bị, kiểm tra và nộp hồ sơ đúng quy định." },
        { step: "03", title: "Nhận kết quả", desc: "Theo dõi tiến độ, nhận kết quả tận tay. Hỗ trợ sau khi hoàn thành." }
    ],
    
    // Đánh giá khách hàng
    testimonials: [
        {
            name: "Anh Minh",
            role: "Giám đốc Công ty TNHH ABC",
            text: "Dịch vụ rất nhanh và chuyên nghiệp. Tôi đã nhận được giấy phép lao động cho chuyên gia nước ngoài chỉ trong 2 tuần.",
            avatar: "M"
        },
        {
            name: "Chị Hương",
            role: "Chủ hộ kinh doanh",
            text: "Tư vấn nhiệt tình, chi phí minh bạch. Tôi yên tâm giao hồ sơ thành lập công ty cho Ez Service.",
            avatar: "H"
        },
        {
            name: "Mr. David",
            role: "Chuyên gia nước ngoài",
            text: "Fast, reliable, and professional. My work permit and temporary residence card were handled smoothly.",
            avatar: "D"
        }
    ]
};