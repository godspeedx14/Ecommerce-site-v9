import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer container">
      <div class="footer-item">
        <h2 class="brand-name">
          mega<span>site</span>{" "}
        </h2>
        <p>social media accounts</p>
        <ul class="footer-icons">
          <li>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-google-plus-g"></i>
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-item">
        <h3>links</h3>
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">download</a>
          </li>
          <li>
            <a href="#">pricing</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
        </ul>
      </div>

      <div class="footer-item">
        <h3>products</h3>
        <ul>
          <li>
            <a href="#">electronics</a>
          </li>
          <li>
            <a href="#">furniture</a>
          </li>
          <li>
            <a href="#">exercise</a>
          </li>
          <li>
            <a href="#">study</a>
          </li>
          <li>
            <a href="#">household</a>
          </li>
        </ul>
      </div>

      <div class="footer-item">
        <h3>support</h3>
        <ul>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">how it works</a>
          </li>
          <li>
            <a href="#">features</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
