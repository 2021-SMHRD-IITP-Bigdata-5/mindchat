import "../Style/detailmenumodal.css";
import { useState } from "react";
export const Menu = ({ menu }) => {
   const [isVisible, setIsVisible] = useState(false);
   const onSetIsVisible = (active) => {
     setIsVisible(active);
   };
   
   return (
     <div>
       <div className="menu">
         <div className="menu-info">
           <p className="menu-title">{menu.name}</p>
           <p className="menu-price">{menu.price}원</p>
           <p className="menu-desc">{menu.description}</p>
         </div>
         <div className="menu-img">
           <img src={menu.image} alt="메뉴 사진" />
           <button  onClick={() => onSetIsVisible(true)} ></button>
         </div>
       </div>
       <div>
         {isVisible && <BodyBlackoutStyle onSetIsVisible={onSetIsVisible} />}
         {isVisible && (
           <DetailMenuModal menuId={menu.id} setIsVisible={setIsVisible} />
         )}
       </div>
     </div>
   );
 };


 const DetailMenuModal = ({ menuId, setIsVisible }) => {
   const onSubmitBtn = () => {
     setIsVisible(false);
     
   };
   return (
     <div className="detail-menu-modal">
       <div>// Modal 세부 내용들</div>
       <div className="detail-model-submit">
         <button onClick={() => onSubmitBtn()}>장바구니 추가</button>
       </div>
     </div>
   );
 };

 // BodyBlackoutStyle
 export const BodyBlackoutStyle = ({ onSetIsVisible }) => {
  return (
    <div
      className="body-blackout-style"
      onClick={() => onSetIsVisible(false)}
    ></div>
  );
};