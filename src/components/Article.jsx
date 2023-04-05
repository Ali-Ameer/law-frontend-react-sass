import icon from "../assets/articleIcon.png";

export const Article = () => {
  const fakeArticle = [
    {
      id: 1,
      title: "حقوق العامل",
      content:
        "بالنظر إلى أرباب العمل وعمالهم يتضح جليًّا للناظر وجود سطوة القاهر المتغلب على الخادم المتذلل، وما ذاك إلا لاستغناء الأول عن الثاني وبذل الثاني لوسعه وطاقته لإثبات نفعه وجدواه له، مما يولد جوًّا وبيئةً خصبة لهضم حق العامل ولو برضاه.",
    },

    {
      id: 2,
      title: "التشريعات الخاصة بحقوق الملكية الفكرية",
      content:
        "تشمل حماية حقوق الملكية الفكرية، وهي تشمل حقوق الطبع والنشر والعلامات التجارية وحقوق الملكية الصناعية وحماية الأسرار التجارية.",
    },

    {
      id: 3,
      title: "القانون الدولي الإنساني",
      content:
        "يتعلق هذا القانون بحماية الأفراد الذين يتأثرون بالنزاعات المسلحة، ويهدف إلى تخفيف معاناتهم وحمايتهم من الأضرار الناجمة عن الحرب، بما في ذلك حماية الأطفال والنساء والمدنيين.",
    },
  ];
  return (
    <article className="article">
      <nav>
        <h1>مقالات قانونية</h1>

        <a href="#">عرض المزيد من المقالات</a>
      </nav>

      <div className="cards">
        {fakeArticle?.map((item) => (
          <div className="card" key={item.id}>
            <h2>
              <img src={icon} alt="" />
              {item.title}
            </h2>

            <div className="container">
              <p>{item.content}</p>
              <a href="#">
                اقرأ المزيد
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#888"
                  className="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
