import React from "react";
import "../styles/Card.scss";
import { BiSolidUser } from "react-icons/bi";

function Card({
  N_BUSINESS_TYPE_E,
  N_BUSINESS_TYPE_T,
  N_COMPANY_E,
  N_COMPANY_T,
  N_URL,
  N_fullname,
  N_name,
  N_shortname,
  marketcap,
}) {

    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

  return (
   
     <div className="card">
      <div className="card_head">
        <BiSolidUser className="card_head_icon" />
      </div>
      <div className="card_content">
        <p><span>Name :</span> {N_name}</p>
        <p><span>Full Name :</span> {N_fullname}</p>
        <p><span>Short Name :</span> {N_shortname === null ? "No Short Name" : N_shortname}</p>
        <p><span>URL :</span> {N_URL === "" ? "No URL" : N_URL}</p>
        <p><span>Business Type :</span> {N_BUSINESS_TYPE_E}</p>
        <p><span>Business Type Thai Name :</span> {N_BUSINESS_TYPE_T}</p>
        <p><span>Company :</span> {N_COMPANY_E}</p>
        <p><span>Company Thai Name :</span> {N_COMPANY_T}</p>
        <p><span>MarketCap :</span> {marketcap === null ? "No MarketCap" : `${ formatNumber([marketcap])}  ฿` } </p>
      </div>
    </div>
  
  );
}

export default Card;
