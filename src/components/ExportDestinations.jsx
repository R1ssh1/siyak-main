import React from 'react';

export default function ExportDestinations({ heading }) {
  return (
    <div className="export-destinations" style={{ marginTop: '50px' }}>
      <p style={{ marginBottom: '10px', color: 'var(--color-deep)' }}>
        <strong>{heading}</strong>
      </p>
      <p style={{ lineHeight: '1.8' }}>
        Canada, Azerbaijan, Kuwait, Morocco, Jordan, Italy, Australia, Chine, Uganda, London, Malaysia, Kazakhstan, Africa, Algeria, Mozambique, Israel, New Zealand, Turkey, Ethiopa, UAE, Colombia, Mexico, UK, Indonesia, Saudi Arabia, Democratic Republic of the Congo, Iraq, Houston, Venezuela, Sri Lanka, Nigeria, Russia, Peru, Egypt, Bahrain, Germany, Ghana, South Africa, Thailand (Bangkok), Argentina, Vietnam, Iran, Dubai, Brazil, Sudan, Trinidad and Tobago, Tunisia, United States, Angola, Cameroon.
        <br /><br />
        Data from the UN, Singapore, Manama, Tehran, Pretoria, Mogadishu, Abu Dhabi, Douala, Freetown, Abidjan, Beirut, Dar es Salaam, Bethlehem, Harare, Byblos, Alexandria, Dakar, Aqaba, Giza, Bulawayo, Soweto, Kampala, Jeddah, Addis Ababa, Cairo, Port Harcourt, New York, Hong Kong, Sharm el-Sheikh, Mecca, Casablanca, Benin, Kano, Colombo, Antananarivo, Khartoum, Muscat, Subra al-Haymah, Ibadan, Kaduna, Luanda, Cape Town, Ouagadougou, Zaria, Mbuji-Mayi, Jerusalem, Yaoundé, Dubai, Kinshasa, Fez, Amman, Algiers, Tel Aviv, Cairo, Omdurman, Rabat, Riyadh, Kolwezi, Doha, Conakry, Dammam, Maputo, Tripoli, Brazzaville, Bamako, Port Elizabeth, Lubumbashi, Accra, Istanbul, Lagos, Nairobi, Lusaka, Durban, Maiduguri, Johannesburg.
      </p>
      <div className="mb50"></div>
    </div>
  );
}
