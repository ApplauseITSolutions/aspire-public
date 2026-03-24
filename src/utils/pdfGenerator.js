import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import aspireLogo from '../assets/images/logo-aspire.png';

export const generateEnrollmentPDF = (enrollmentData, paymentData = null) => {
  const doc = new jsPDF();
  
  // Add orange header background
  doc.setFillColor(239, 127, 44); // Orange color
  doc.rect(0, 0, 210, 40, 'F');
  
  // Add Aspire logo
  try {
    // Add logo image centered in the header
    doc.addImage(aspireLogo, 'PNG', 75, 8, 60, 24);
  } catch (error) {
    // Fallback to text if logo fails to load
    console.error('Logo loading failed:', error);
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.text('ASPIRE', 105, 22, { align: 'center' });
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text('Knowledge & Skills', 105, 30, { align: 'center' });
  }
  
  // Confirmation text
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Enrollment Confirmation', 105, 55, { align: 'center' });
  
  // Enrollment ID
  if (enrollmentData.enrolment_id) {
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text(`Enrollment ID: ${enrollmentData.enrolment_id}`, 105, 62, { align: 'center' });
  }
  
  // Date
  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  doc.text(`Date: ${currentDate}`, 105, 68, { align: 'center' });
  
  // Student Details Section
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(239, 127, 44);
  doc.text('Student Details', 20, 85);
  
  // Student details table
  const studentDetails = [
    ['Name', enrollmentData.name || `${enrollmentData.first_name || ''} ${enrollmentData.last_name || ''}`.trim() || 'N/A'],
    ['Email', enrollmentData.email || 'N/A'],
    ['Phone', enrollmentData.phone || enrollmentData.contact || 'N/A'],
    ['College Name', enrollmentData.college_name || enrollmentData.college || 'N/A'],
    ['Internship Domain', enrollmentData.internship_domain || 'Virtual Internship']
  ];
  
  autoTable(doc, {
    startY: 90,
    head: [],
    body: studentDetails,
    theme: 'plain',
    styles: {
      fontSize: 10,
      cellPadding: 3,
    },
    columnStyles: {
      0: { fontStyle: 'bold', cellWidth: 50, textColor: [61, 23, 23] },
      1: { cellWidth: 120, textColor: [0, 0, 0] }
    },
    margin: { left: 20 }
  });
  
  // Payment Details Section (if payment data is provided)
  if (paymentData) {
    const finalY = doc.lastAutoTable.finalY + 15;
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(239, 127, 44);
    doc.text('Payment Details', 20, finalY);
    
    const paymentDetails = [
      ['Base Amount', 'Rs. 1,500.00'],
      ['CGST (9%)', 'Rs. 135.00'],
      ['SGST (9%)', 'Rs. 135.00'],
      ['Payment Gateway Charges (2%)', 'Rs. 35.40'],
      ['Total Amount Paid', 'Rs. 1,805.40']
    ];
    
    if (paymentData.razorpay_payment_id) {
      paymentDetails.push(['Payment ID', paymentData.razorpay_payment_id]);
    }
    if (paymentData.razorpay_order_id) {
      paymentDetails.push(['Order ID', paymentData.razorpay_order_id]);
    }
    
    paymentDetails.push(['Payment Status', 'Paid (Success)']);
    paymentDetails.push(['Payment Date', currentDate]);
    
    autoTable(doc, {
      startY: finalY + 5,
      head: [],
      body: paymentDetails,
      theme: 'plain',
      styles: {
        fontSize: 10,
        cellPadding: 3,
      },
      columnStyles: {
        0: { fontStyle: 'bold', cellWidth: 80, textColor: [61, 23, 23] },
        1: { cellWidth: 90, textColor: [0, 0, 0] }
      },
      margin: { left: 20 },
      didParseCell: function(data) {
        // Highlight total row
        if (data.row.index === 4) {
          data.cell.styles.fontStyle = 'bold';
          data.cell.styles.textColor = [239, 127, 44];
          data.cell.styles.fontSize = 11;
        }
      }
    });
  }
  
  // Footer
  const pageHeight = doc.internal.pageSize.height;
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.setFont('helvetica', 'normal');
  doc.text('Thank you for enrolling with Aspire Knowledge & Skills!', 105, pageHeight - 30, { align: 'center' });
  doc.text('For any queries, contact us at: info@aspireks.com | 020-25530291', 105, pageHeight - 25, { align: 'center' });
  doc.text('www.aspireks.com', 105, pageHeight - 20, { align: 'center' });
  
  // Add border
  doc.setDrawColor(239, 127, 44);
  doc.setLineWidth(0.5);
  doc.rect(10, 10, 190, pageHeight - 20);
  
  return doc;
};

export const downloadEnrollmentPDF = (enrollmentData, paymentData = null) => {
  const doc = generateEnrollmentPDF(enrollmentData, paymentData);
  const fileName = `Aspire_Enrollment_${enrollmentData.enrolment_id || 'Confirmation'}.pdf`;
  doc.save(fileName);
};

export const getEnrollmentPDFBlob = (enrollmentData, paymentData = null) => {
  const doc = generateEnrollmentPDF(enrollmentData, paymentData);
  return doc.output('blob');
};

export const getEnrollmentPDFBase64 = (enrollmentData, paymentData = null) => {
  const doc = generateEnrollmentPDF(enrollmentData, paymentData);
  return doc.output('datauristring').split(',')[1];
};
