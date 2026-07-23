import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER

def build_pdf():
    output_dir = os.path.join(os.getcwd(), "public")
    os.makedirs(output_dir, exist_ok=True)
    pdf_path = os.path.join(output_dir, "Shova_Kumari_Chaudhary_CV.pdf")
    
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )
    
    styles = getSampleStyleSheet()
    
    header_title = ParagraphStyle(
        'HeaderTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=26,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#111111')
    )
    
    header_subtitle = ParagraphStyle(
        'HeaderSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#444444')
    )
    
    header_contact = ParagraphStyle(
        'HeaderContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#333333')
    )
    
    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=15,
        textColor=colors.HexColor('#111111')
    )
    
    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.2,
        leading=13.5,
        textColor=colors.HexColor('#333333')
    )
    
    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#333333'),
        leftIndent=8
    )

    job_title_style = ParagraphStyle(
        'JobTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#111111')
    )

    job_sub_style = ParagraphStyle(
        'JobSub',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#555555')
    )

    date_style = ParagraphStyle(
        'DateStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#555555')
    )

    story = []

    # Title & Header
    story.append(Paragraph("SHOVA KUMARI CHAUDHARY", header_title))
    story.append(Spacer(1, 4))
    story.append(Paragraph("UI/UX DESIGNER  •  PROJECT MANAGER", header_subtitle))
    story.append(Spacer(1, 8))
    
    contact_text = "shovachaudhary5@gmail.com &nbsp;&nbsp;|&nbsp;&nbsp; +977 9860802456 &nbsp;&nbsp;|&nbsp;&nbsp; linkedin.com/in/shovakushmi/"
    story.append(Paragraph(contact_text, header_contact))
    story.append(Spacer(1, 10))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#dddddd'), spaceBefore=0, spaceAfter=12))

    # Professional Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
    story.append(Spacer(1, 4))
    summary_text = (
        "UI/UX Designer with 5+ years of experience designing enterprise SaaS products for the travel and hospitality industry. "
        "Skilled in UX research, information architecture, interaction design, design systems, and usability testing. Recently "
        "expanded into project management, leading Agile teams and collaborating with cross-functional stakeholders to "
        "deliver user-centered digital products."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 10))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#eeeeee'), spaceBefore=0, spaceAfter=10))

    # Core Competencies
    story.append(Paragraph("CORE COMPETENCIES", section_heading))
    story.append(Spacer(1, 6))
    
    comp_col1 = [
        "• User Research",
        "• Information Architecture",
        "• User Flows & Journey Mapping",
        "• Wireframing",
        "• Prototyping"
    ]
    comp_col2 = [
        "• Design Systems",
        "• Usability Testing",
        "• Agile Project Management",
        "• Sprint Planning & Tracking",
        "• Team Leadership"
    ]
    comp_col3 = [
        "• Stakeholder Management",
        "• Cross-functional Collaboration",
        "• Requirement Analysis",
        "• Communication",
        "• Problem Solving"
    ]

    c1_paragraphs = [Paragraph(item, bullet_style) for item in comp_col1]
    c2_paragraphs = [Paragraph(item, bullet_style) for item in comp_col2]
    c3_paragraphs = [Paragraph(item, bullet_style) for item in comp_col3]

    comp_table_data = []
    for i in range(5):
        comp_table_data.append([c1_paragraphs[i], c2_paragraphs[i], c3_paragraphs[i]])

    comp_table = Table(comp_table_data, colWidths=[180, 180, 180])
    comp_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(comp_table)
    story.append(Spacer(1, 10))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#eeeeee'), spaceBefore=0, spaceAfter=10))

    # Professional Experience
    story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_heading))
    story.append(Spacer(1, 8))

    # Traveality Nepal
    exp1_date = Paragraph("Mar 2024 - Present", date_style)
    exp1_title = [
        Paragraph("Traveality Nepal", job_title_style),
        Paragraph("UI/UX Designer & Project Manager", job_sub_style)
    ]
    exp1_bullets = [
        "Led end-to-end UX design for OTA and PMS platforms, from user research and information architecture to high-fidelity prototypes.",
        "Designed responsive booking and hotel management experiences that streamlined user workflows.",
        "Conducting user research, usability evaluations to identify opportunities and drive product improvements.",
        "Creating user flows, wireframes, interactive prototypes, and design systems in Figma to ensure consistency across product improvements.",
        "Collaborating with developers, product owners, and stakeholders to deliver user-centered solutions.",
        "Guided a cross-functional development team through sprint planning, delivery tracking, and stakeholder coordination.",
        "Facilitating communication across developers, QA engineers and business stakeholders to align goals and resolve blockers.",
        "Monitoring project, maintaining timelines and ensuring standards are met through design reviews and documentation."
    ]
    
    exp1_bullet_paragraphs = [Paragraph(f"• {b}", bullet_style) for b in exp1_bullets]
    exp1_content = exp1_title + exp1_bullet_paragraphs
    
    t1 = Table([[exp1_date, exp1_content]], colWidths=[110, 430])
    t1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t1)
    story.append(Spacer(1, 12))

    # InfoDevelopers
    exp2_date = Paragraph("Jul 2021 - Mar 2024", date_style)
    exp2_title = [
        Paragraph("InfoDevelopers Pvt. Ltd.", job_title_style),
        Paragraph("Junior UI/UX Designer", job_sub_style)
    ]
    exp2_bullets = [
        "Designing user-centered web and mobile applications for enterprise clients.",
        "Developed and maintained reusable design systems and UI components.",
        "Worked closely with developers to ensure pixel-perfect implementation.",
        "Collaborated with product managers and stakeholders to prioritize features and enhance user experience."
    ]
    exp2_bullet_paragraphs = [Paragraph(f"• {b}", bullet_style) for b in exp2_bullets]
    exp2_content = exp2_title + exp2_bullet_paragraphs

    t2 = Table([[exp2_date, exp2_content]], colWidths=[110, 430])
    t2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t2)
    story.append(Spacer(1, 10))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#eeeeee'), spaceBefore=0, spaceAfter=10))

    # Freelance Experience
    freelance_story = []
    freelance_story.append(Paragraph("FREELANCE EXPERIENCE", section_heading))
    freelance_story.append(Spacer(1, 6))

    free_dates = [
        Paragraph("<b>Leanq</b><br/><font color='#555555' size='8'>(Nov 2024 - Jan 2025)</font>", job_title_style),
        Paragraph("<b>Hobes Technology</b><br/><font color='#555555' size='8'>(Jan 2024 - Feb 2024)</font>", job_title_style),
        Paragraph("<b>Edxplor</b><br/><font color='#555555' size='8'>(Apr 2022 - Aug 2022)</font>", job_title_style)
    ]

    free_bullets = [
        "Designed dashboards, websites and admin panels for multiple startups.",
        "Gathered requirements and analyzed workflows.",
        "Created user flows, wireframes, prototypes, and high fidelity UI designs.",
        "Developed design systems and reusable component libraries.",
        "Collaborated directly with clients to understand requirement and deliver results.",
        "Maintained brand consistency across digital products."
    ]
    free_bullet_paragraphs = [Paragraph(f"• {b}", bullet_style) for b in free_bullets]

    tf = Table([[free_dates, free_bullet_paragraphs]], colWidths=[150, 390])
    tf.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    freelance_story.append(tf)
    freelance_story.append(Spacer(1, 10))
    freelance_story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#eeeeee'), spaceBefore=0, spaceAfter=10))
    story.append(KeepTogether(freelance_story))

    # Key Projects
    proj_story = []
    proj_story.append(Paragraph("KEY PROJECTS", section_heading))
    proj_story.append(Spacer(1, 6))

    p1 = [
        Paragraph("OTA Platform", job_title_style),
        Paragraph("Designed an end-to-end online travel agency platform including hotel search, booking flow, and payment integration.", body_style)
    ]
    p2 = [
        Paragraph("PMS", job_title_style),
        Paragraph("Designed property management system for hotels including reservation, room management, housekeeping, maintenance and reporting dashboards.", body_style)
    ]
    p3 = [
        Paragraph("OTA CRM", job_title_style),
        Paragraph("Created CRM dashboards for managing leads, bookings and customers and management setup.", body_style)
    ]

    tp = Table([[p1, p2, p3]], colWidths=[175, 185, 180])
    tp.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('RIGHTPADDING', (0,0), (-2,-1), 12),
        ('LEFTPADDING', (1,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    proj_story.append(tp)
    proj_story.append(Spacer(1, 10))
    proj_story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#eeeeee'), spaceBefore=0, spaceAfter=10))
    story.append(KeepTogether(proj_story))

    # Education & Tools
    edu_tools_story = []
    edu_col = [
        Paragraph("EDUCATION", section_heading),
        Spacer(1, 6),
        Paragraph("<b>2023 - 2025</b> &nbsp;&nbsp; <b>Master of Computer Information System</b>", job_title_style),
        Paragraph("Nepal College of Information Technology, Balkumari", job_sub_style),
        Spacer(1, 6),
        Paragraph("<b>2017 - 2022</b> &nbsp;&nbsp; <b>Bachelor of Computer Application</b>", job_title_style),
        Paragraph("Nepal College of Information Technology, Balkumari", job_sub_style)
    ]

    tools_col = [
        Paragraph("TOOLS", section_heading),
        Spacer(1, 6),
        Table([
            [Paragraph("• Figma", bullet_style), Paragraph("• Photoshop", bullet_style)],
            [Paragraph("• FigJam", bullet_style), Paragraph("• Notion", bullet_style)],
            [Paragraph("• Balsamiq", bullet_style), Paragraph("• Miro", bullet_style)],
            [Paragraph("• Illustrator", bullet_style), Paragraph("• Jira", bullet_style)],
            [Paragraph("• Photoshop", bullet_style), Paragraph("• Microsoft Office", bullet_style)]
        ], colWidths=[100, 120], style=[
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 1),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ])
    ]

    te = Table([[edu_col, tools_col]], colWidths=[310, 230])
    te.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    edu_tools_story.append(te)
    edu_tools_story.append(Spacer(1, 10))
    edu_tools_story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#eeeeee'), spaceBefore=0, spaceAfter=10))
    story.append(KeepTogether(edu_tools_story))

    # References & Footer
    ref_story = []
    ref_story.append(Paragraph("REFERENCES", section_heading))
    ref_story.append(Spacer(1, 4))
    ref_story.append(Paragraph("• <b>Yunish Shakya</b> — Senior Frontend Developer | Traveality Nepal", bullet_style))
    ref_story.append(Paragraph("• <b>Sajan Sthapit</b> — Senior Backend Developer | Traveality Nepal", bullet_style))
    ref_story.append(Spacer(1, 14))

    footer_text = Paragraph("<b>Portfolio:</b> Shova Kumari Chaudhary", ParagraphStyle('Footer', parent=styles['Normal'], alignment=TA_CENTER, fontSize=9, fontName='Helvetica', textColor=colors.HexColor('#555555')))
    ref_story.append(footer_text)
    story.append(KeepTogether(ref_story))

    doc.build(story)
    print(f"Successfully generated PDF at {pdf_path}")

if __name__ == '__main__':
    build_pdf()
