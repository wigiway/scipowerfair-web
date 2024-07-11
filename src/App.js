import React from 'react';
import './App.css';

const App = () => {
  const handleClick = async () => {
    try {
      // ส่งคำขอไปยัง API endpoint พร้อมกับ total_view
      const response = await fetch('https://wigiway-api.vercel.app/api/scipowerTotalView', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ total_view: 'total_view', views: 1 }), // เปลี่ยน 'your_total_view_key' เป็นค่า primary key ที่คุณต้องการ
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // เมื่อคำขอสำเร็จแล้ว เปลี่ยนเส้นทางไปยัง URL ที่ต้องการ
      window.location.href = 'https://vxg9g.webar.run/8237427486333416546/0.0.5/';
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="App">
      <button className="start-button" onClick={handleClick}>START</button>
    </div>
  );
};

export default App;

