
import React from "react";
import "./components/Footer.css"
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyle";

const Footer = () => {
return (
	<div className="main-footer">
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		Cửa Hàng Linh Kiện Máy Tính: Máy tính là bạn không phải đồ dùng
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Nguyễn Ngọc Sơn</FooterLink>
			<FooterLink href="#">Đỗ Ngọc Sơn</FooterLink>
			<FooterLink href="#">Đỗ Gia Huy</FooterLink>
			<FooterLink href="#">Nguyễn Thành Lộc</FooterLink>
			<FooterLink href="#">Hồ Đăng Trí Em</FooterLink>
		</Column>
		<Column>
			<Heading>Cửa Hàng</Heading>
			<FooterLink href="#">Los Angeles</FooterLink>
			<FooterLink href="#">London</FooterLink>
			<FooterLink href="#">Viet Nam</FooterLink>
			<FooterLink href="#">Italia</FooterLink>
		</Column>
		<Column>
			<Heading>Bảo Hành</Heading>
			<FooterLink href="#">Chính sách bảo hành</FooterLink>
			<FooterLink href="#">Chính sách thanh toán</FooterLink>
			<FooterLink href="#">Chính sách giao hàng</FooterLink>
			<FooterLink href="#">Chính sách bảo mật</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.facebook.com/dns0909">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
	</div>
);
};
export default Footer;
