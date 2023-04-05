import img from "../assets/img.jpg"

const BenefitOfLegalCourses = () => {
  return (
    <section className='benefit'>
        <div className="content">
            <h1>كيف تستفيد من <br/>الدورات القانونية ؟</h1>
            <p>
            الدورات القانونية تعزز فهم النظام القانوني، وتطوير المهارات والإمتثال القانوني، وتعزز الدفاع القانوني، وتحديث المهني، وتحسن الأداء القانوني. يمكن للأفراد والشركات والمؤسسات الاستفادة من الدورات القانونية لتحسين المعرفة والخبرات القانونية اللازمة للعمل في القطاع القانوني والأعمال المرتبطة به.
            </p>
        </div>
        <div className="leftImg">
            <img src={img} alt="illustration" />
        </div>
    </section>
  )
}

export default BenefitOfLegalCourses