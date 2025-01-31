import React from "react";
import * as C from "../styles/CommonStyle";
import * as Mp from "../styles/MapStyle";

import PcTitle from "../components/PcTitle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MapImg from "../img/map_original_334x404.png";

import MapImgA from "../img/map_A_334x404.png";
import MapImgB from "../img/map_B_334x404.png";
import MapImgC from "../img/map_C_334x404.png";
import MapImgD from "../img/map_D_334x404.png";
import MapImgE from "../img/map_E_334x404.png";

import DropDown from "../img/dropdown_40x20.png";
import DropUp from "../img/dropup_40x20.png";

import cloudLeft from "../img/3_cloud_104x75.png";
import cloudRight from "../img/3_cloud_131x144.png";

import { useState, useEffect, useRef } from "react";

function ExpandableContent({
    showMoreText,
    showLessText,
    a,
    b,
    c,
    d,
    e,
    setImage,
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null); // 활성화된 버튼의 인덱스를 추적하는 상태

    const [btnColor, setbtnColor] = useState("#FF9900");

    // 버튼 색상 설정
    useEffect(() => {
        if (showLessText === "2일차") {
            setbtnColor("#E94F64");
        } else if (showLessText === "3일차") {
            setbtnColor("#654FE9");
        } else {
            setbtnColor("#FF9900");
        }
    }, [showLessText]);

    // 이미지 경로 배열
    const dropimg = [DropDown, DropUp];
    const imagePaths = [MapImg, MapImgA, MapImgB, MapImgC, MapImgD, MapImgE];
    const handleButtonClick = (index) => {
        // 이미 활성화된 버튼을 다시 클릭하는 경우 첫 번째 이미지로 돌아갑니다.
        if (index === activeIndex) {
            setImage(imagePaths[0]);
            setActiveIndex(null); // 활성화된 인덱스를 초기화
        } else {
            setImage(imagePaths[index]);
            setActiveIndex(index); // 새로운 활성화된 인덱스를 설정
        }
    };

    const btnStyle = {
        marginBottom: "10px",
        background: "rgba(255, 255, 255, 0.2)", // 배경을 투명하게 설정
        border: "none",
        borderRadius: "6px",
        color: "#ffffff", // 텍스트 색상을 흰색으로 설정
        padding: "5px 10px",
        cursor: "pointer",
        textAlign: "left",
        margin: "1%",
        boxShadow: "0 4px 4px rgba(47, 123, 209, 0.25)", // 네 개의 값으로 그림자 추가
        lineHeight: "136%",
        fontFamily: "AppleSDGothicNeo",
        fontStyle: "normal",
        fontWeight: "500",
    };
    const textInBtnStyle = {
        color: "rgba(255, 255, 255, 0.8)", // 흰색의 80% 투명도
        marginBottom: "2%",
        fontFamily: "AppleSDGothicNeo",
        fontStyle: "normal",
        fontWeight: "400",
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                margin: "4%",

                marginBottom: "10px",
                background: "transparent", // 배경을 투명하게 설정
                border: "4px solid #ffffff",
                borderRadius: "13px",
                color: "#ffffff", // 텍스트 색상을 흰색으로 설정
                padding: "5px 10px",
                cursor: "pointer",
                textAlign: "left",
                boxShadow: "0 4px 4px rgba(47, 123, 209, 0.25)",
                backgroundColor: "rgba(106, 172, 243, 0.5)",
            }}
        >
            {/* 버튼을 컨텐츠 상단에 배치 */}
            <button
                style={{
                    margin: "1%",
                    background: "transparent", // 배경을 투명하게 설정
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-around",
                }}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div
                    style={{
                        background: btnColor,
                        color: "#FFFFFF",
                        border: "none",
                        borderRadius: "13px",
                        width: "45px",
                    }}
                >
                    <div
                        style={{
                            fontSize: "10px",
                            display: "flex",
                            justifyContent: "center",
                            margin: "4px",
                            fontFamily: "AppleSDGothicNeo",
                            fontStyle: "normal",
                            fontWeight: "500",
                        }}
                    >
                        {showLessText}
                    </div>
                </div>
                <div
                    style={{
                        color: "#FFFFFF",
                        fontFamily: "AppleSDGothicNeo",
                        fontStyle: "normal",
                        fontWeight: "800",
                        marginTop: "auto",
                    }}
                >
                    {showMoreText}
                </div>
                <div
                    style={{
                        marginTop: "9px",
                    }}
                >
                    <img
                        style={{
                            height: "5px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                        src={isExpanded ? dropimg[1] : dropimg[0]}
                        alt="dropdown icon"
                    />
                </div>
            </button>

            {/* 확장되는 컨텐츠 부분 */}
            <div
                style={{
                    maxHeight: isExpanded ? "560px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.5s ease",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    marginBottom: "2px",
                }}
            >
                <button style={btnStyle} onClick={() => handleButtonClick(1)}>
                    <div style={{ margin: "2%" }}>
                        <div style={textInBtnStyle}>BOOTH-A </div>

                        {a}
                    </div>
                </button>
                <button style={btnStyle} onClick={() => handleButtonClick(2)}>
                    <div style={{ margin: "2%" }}>
                        <div style={textInBtnStyle}> BOOTH-B</div>

                        {b}
                    </div>
                </button>
                <button style={btnStyle} onClick={() => handleButtonClick(3)}>
                    <div style={{ margin: "2%" }}>
                        <div style={textInBtnStyle}>BOOTH-C</div>

                        {c}
                    </div>
                </button>
                <button style={btnStyle} onClick={() => handleButtonClick(4)}>
                    <div style={{ margin: "2%" }}>
                        <div style={textInBtnStyle}> BOOTH-D</div>

                        {d}
                    </div>
                </button>
                <button style={btnStyle} onClick={() => handleButtonClick(5)}>
                    <div style={{ margin: "2%" }}>
                        <div style={textInBtnStyle}> BOOTH-E </div>

                        {e}
                    </div>
                </button>
            </div>
        </div>
    );
}

function Map() {
    // 이미지 경로 배열
    const imagePaths = [MapImg, MapImgA, MapImgB, MapImgC, MapImgD, MapImgE];
    // 현재 이미지 상태
    const [mapImg, setMapImg] = useState(imagePaths[0]);
    const [applyBrTags, setApplyBrTags] = useState(true);
    const contentRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current) {
                const width = contentRef.current.offsetWidth;
                setApplyBrTags(width < 450);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // 초기 실행

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <C.Page>
                <C.BlackBg />
                <C.Area>
                    <C.Title>
                        <PcTitle />
                    </C.Title>
                    <Mp.Background>
                        <C.Phone>
                            <Mp.Map ref={contentRef}>
                                <Header />
                                <C.PageTitle>MAP</C.PageTitle>
                                <Mp.CloudLeft>
                                    <img
                                        src={cloudLeft}
                                        alt="배경 구름"
                                        width={102}
                                        style={{ marginLeft: "-28px" }}
                                    />
                                </Mp.CloudLeft>

                                <Mp.MapTitle>[근화제 부스 지도]</Mp.MapTitle>
                                <Mp.CloudRight>
                                    <img src={cloudRight} alt="배경 구름" />
                                </Mp.CloudRight>
                                <Mp.Mapimgs>
                                    <Mp.Mapimg src={mapImg}></Mp.Mapimg>
                                </Mp.Mapimgs>

                                <Mp.Mapline></Mp.Mapline>
                                <Mp.MapInfo>
                                    <Mp.Infobox>
                                        <Mp.Infotext>
                                            * 부스를 누르면 지도에서 부스별
                                            위치를 확인할 수 있습니다.
                                        </Mp.Infotext>

                                        <ExpandableContent
                                            showMoreText="5월 22일 수요일 - 낮 부스"
                                            showLessText="1일차"
                                            a={
                                                applyBrTags ? (
                                                    <>
                                                        진로취업지원센터,
                                                        현장실습지원센터,
                                                        <br />
                                                        사회봉사/학생지원과
                                                    </>
                                                ) : (
                                                    "진로취업지원센터, 현장실습지원센터, 사회봉사/학생지원과"
                                                )
                                            }
                                            b={
                                                applyBrTags ? (
                                                    <>
                                                        국제처, 건강증진센터,
                                                        총학생회, 운현방송국
                                                    </>
                                                ) : (
                                                    "국제처, 건강증진센터, 총학생회, 운현방송국"
                                                )
                                            }
                                            c={
                                                applyBrTags ? (
                                                    <>
                                                        ISSUE,
                                                        서울베스트내과의원,
                                                        시원스쿨, 운지문학회,
                                                        <br />
                                                        덕우 * Duck in 우이천,
                                                        돌멩돌맹, 여운
                                                        Afterglow,
                                                        <br />
                                                        물꼬, 햅피프로젝트
                                                    </>
                                                ) : (
                                                    "ISSUE, 서울베스트내과의원, 시원스쿨, 운지문학회, 덕우 * Duck in 우이천, 돌멩돌맹, 여운 Afterglow, 물꼬, 햅피프로젝트"
                                                )
                                            }
                                            d={
                                                applyBrTags ? (
                                                    <>
                                                        빛내미, 덕성여대
                                                        영자신문사 VISTA, 화학,
                                                        <br />
                                                        유아교육과, P.I.C.E.
                                                    </>
                                                ) : (
                                                    "빛내미, 덕성여대 영자신문사 VISTA, 화학, 유아교육과, P.I.C.E."
                                                )
                                            }
                                            e={
                                                applyBrTags ? (
                                                    <>
                                                        총학생회 문화기획국,
                                                        국어국문학, 덕성 검도부,
                                                        <br />
                                                        IT미디어공학,
                                                        정치외교학, 바이오공학,
                                                        덕불, <br />
                                                        필름소피, 사학,
                                                        Atractivo, 식품영양학,
                                                        생활체육학
                                                    </>
                                                ) : (
                                                    "총학생회 문화기획국, 국어국문학, 덕성 검도부, IT미디어공학, 정치외교학, 바이오공학, 덕불, 필름소피, 사학, Atractivo, 식품영양학, 생활체육학"
                                                )
                                            }
                                            imagePaths={imagePaths}
                                            setImage={setMapImg}
                                            applyBrTags={applyBrTags}
                                        />
                                        <ExpandableContent
                                            showMoreText="5월 22일 수요일 - 밤 부스"
                                            showLessText="1일차"
                                            a={
                                                applyBrTags ? (
                                                    <>
                                                        진로취업지원센터,
                                                        현장실습지원센터,
                                                        <br />
                                                        사회봉사/학생지원과
                                                    </>
                                                ) : (
                                                    "진로취업지원센터, 현장실습지원센터, 사회봉사/학생지원과"
                                                )
                                            }
                                            b={
                                                applyBrTags ? (
                                                    <>
                                                        국제처, 총학생회,
                                                        운현방송국
                                                    </>
                                                ) : (
                                                    "국제처, 총학생회, 운현방송국"
                                                )
                                            }
                                            c={
                                                applyBrTags ? (
                                                    <>
                                                        ISSUE,
                                                        서울베스트내과의원,
                                                        시원스쿨,
                                                        <br />
                                                        슈퍼(market)이끌림, 덕우
                                                        * Duck in 우이천,
                                                        <br />
                                                        덕칠이네 야채가게,
                                                        또아오락실,
                                                        <br />
                                                        어떻게나에게그대란행운이온걸까
                                                    </>
                                                ) : (
                                                    "ISSUE, 서울베스트내과의원, 시원스쿨, 슈퍼(market)이끌림, 덕우 * Duck in 우이천, 덕칠이네 야채가게, 또아오락실, 어떻게나에게그대란행운이온걸까"
                                                )
                                            }
                                            d={
                                                applyBrTags ? (
                                                    <>
                                                        빛내미,
                                                        디지털소프트웨어공학부,
                                                        한빛, 톤잘알, <br />
                                                        폭닥폭닥
                                                    </>
                                                ) : (
                                                    "빛내미, 디지털소프트웨어공학부, 한빛, 톤잘알, 폭닥폭닥"
                                                )
                                            }
                                            e={
                                                applyBrTags ? (
                                                    <>
                                                        F.O.R.K, 과학기술대학,
                                                        약학대학, 덕냥당,
                                                        <br />
                                                        정치외교학,
                                                        운현극예술연구회,
                                                        천기누설, 몽글몽글,
                                                        사회복지학, 심리학,
                                                        언더덕씨, 열음
                                                    </>
                                                ) : (
                                                    "F.O.R.K, 과학기술대학, 약학대학, 덕냥당, 정치외교학, 운현극예술연구회, 천기누설, 몽글몽글, 사회복지학, 심리학, 언더덕씨, 열음"
                                                )
                                            }
                                            imagePaths={imagePaths}
                                            setImage={setMapImg}
                                            applyBrTags={applyBrTags}
                                        />
                                        <ExpandableContent
                                            showMoreText="5월 23일 목요일 - 낮 부스"
                                            showLessText="2일차"
                                            a={
                                                applyBrTags ? (
                                                    <>
                                                        진로취업지원센터,
                                                        현장실습지원센터,
                                                        <br />
                                                        사회봉사/학생지원과
                                                    </>
                                                ) : (
                                                    "진로취업지원센터, 현장실습지원센터, 사회봉사/학생지원과"
                                                )
                                            }
                                            b={
                                                applyBrTags ? (
                                                    <>
                                                        국제처, 총학생회,
                                                        운현방송국
                                                    </>
                                                ) : (
                                                    "국제처, 총학생회, 운현방송국"
                                                )
                                            }
                                            c={
                                                applyBrTags ? (
                                                    <>
                                                        기후환경과문화전공,
                                                        서울베스트내과의원,
                                                        EF코리아,
                                                        <br />
                                                        여운 Afterglow,
                                                        chaekbang(책방), 덕새
                                                        털-업,
                                                        <br />
                                                        물꼬, 락스타 호소인
                                                    </>
                                                ) : (
                                                    "기후환경과문화전공, 서울베스트내과의원, EF코리아, 여운 Afterglow, chaekbang(책방), 덕새 털-업, 물꼬, 락스타 호소인"
                                                )
                                            }
                                            d={
                                                applyBrTags ? (
                                                    <>
                                                        유아교육과, 사이버보안,
                                                        사학, 도담도담,
                                                        <br />
                                                        드리즐스튜디오
                                                    </>
                                                ) : (
                                                    "유아교육과, 사이버보안, 사학, 도담도담, 드리즐스튜디오"
                                                )
                                            }
                                            e={
                                                applyBrTags ? (
                                                    <>
                                                        총학생회 문화기획국,
                                                        덕칠이네 야채가게, 이오,
                                                        <br />
                                                        생활체육학, 수학,
                                                        식품영양학, P.I.C.E.,
                                                        바이오공학, 국어국문학,
                                                        아동가족학, F.O.R.K,
                                                        덕성 검도부
                                                    </>
                                                ) : (
                                                    "총학생회 문화기획국, 덕칠이네 야채가게, 이오, 생활체육학, 수학, 식품영양학, P.I.C.E., 바이오공학, 국어국문학, 아동가족학, F.O.R.K, 덕성 검도부"
                                                )
                                            }
                                            imagePaths={imagePaths}
                                            setImage={setMapImg}
                                            applyBrTags={applyBrTags}
                                        />
                                        <ExpandableContent
                                            showMoreText="5월 23일 목요일 - 밤 부스"
                                            showLessText="2일차"
                                            a={
                                                applyBrTags ? (
                                                    <>
                                                        진로취업지원센터,
                                                        현장실습지원센터,
                                                        <br />
                                                        사회봉사/학생지원과
                                                    </>
                                                ) : (
                                                    "진로취업지원센터, 현장실습지원센터, 사회봉사/학생지원과"
                                                )
                                            }
                                            b={
                                                applyBrTags ? (
                                                    <>국제처, 총학생회</>
                                                ) : (
                                                    "국제처, 총학생회"
                                                )
                                            }
                                            c={
                                                applyBrTags ? (
                                                    <>
                                                        여명,
                                                        서울베스트내과의원,
                                                        EF코리아, 한빛,
                                                        <br />
                                                        나의 마음을 담아,
                                                        Atractivo, 열음, 덕냥당
                                                    </>
                                                ) : (
                                                    "여명, 서울베스트내과의원, EF코리아, 한빛, 나의 마음을 담아, Atractivo, 열음, 덕냥당"
                                                )
                                            }
                                            d={
                                                applyBrTags ? (
                                                    <>
                                                        컴퓨터공학, 화학,
                                                        사회복지학, 도담도담,
                                                        언더덕씨
                                                    </>
                                                ) : (
                                                    "컴퓨터공학, 화학, 사회복지학, 도담도담, 언더덕씨"
                                                )
                                            }
                                            e={
                                                applyBrTags ? (
                                                    <>
                                                        운지문학회, 약학대학,
                                                        과학기술대학,
                                                        <br />
                                                        디지털소프트웨어공학부,
                                                        수학, 심리학,
                                                        <br />
                                                        운현극예술연구회,
                                                        일어일문학, 국어국문학,
                                                        <br />
                                                        아동가족학, 필름소피,
                                                        덕성 검도부
                                                    </>
                                                ) : (
                                                    "운지문학회, 약학대학, 과학기술대학, 디지털소프트웨어공학부, 수학, 심리학, 운현극예술연구회, 일어일문학, 국어국문학, 아동가족학, 필름소피, 덕성 검도부"
                                                )
                                            }
                                            imagePaths={imagePaths}
                                            setImage={setMapImg}
                                            applyBrTags={applyBrTags}
                                        />
                                        <ExpandableContent
                                            showMoreText="5월 24일 금요일 - 낮 부스"
                                            showLessText="3일차"
                                            a={
                                                applyBrTags ? (
                                                    <>
                                                        기후환경과문화전공,
                                                        현장실습지원센터,
                                                        <br />
                                                        사회봉사/학생지원과
                                                    </>
                                                ) : (
                                                    "기후환경과문화전공, 현장실습지원센터, 사회봉사/학생지원과"
                                                )
                                            }
                                            b={
                                                applyBrTags ? (
                                                    <>총학생회, 운현방송국</>
                                                ) : (
                                                    "총학생회, 운현방송국"
                                                )
                                            }
                                            c={
                                                applyBrTags ? (
                                                    <>
                                                        원데이 클래스,
                                                        서울베스트내과의원,
                                                        시원스쿨,
                                                        <br />
                                                        오밀조밀, Dearest, 여운
                                                        Afterglow,
                                                        <br />
                                                        찰나, 모루팔이 덕우,
                                                        물꼬
                                                    </>
                                                ) : (
                                                    "원데이 클래스, 서울베스트내과의원, 시원스쿨, 오밀조밀, Dearest, 여운 Afterglow, 찰나, 모루팔이 덕우, 물꼬"
                                                )
                                            }
                                            d={
                                                applyBrTags ? (
                                                    <>
                                                        덕성여대 영자신문사
                                                        VISTA, 과학기술대학,
                                                        <br />
                                                        식품영양학,
                                                        자세히생각하라XRADIUS,
                                                        햅피프로젝트
                                                    </>
                                                ) : (
                                                    "덕성여대 영자신문사 VISTA, 과학기술대학, 식품영양학, 자세히생각하라XRADIUS, 햅피프로젝트"
                                                )
                                            }
                                            e={
                                                applyBrTags ? (
                                                    <>
                                                        총학생회 문화기획국,
                                                        바이오공학, 운지문학회,
                                                        <br />
                                                        디지털소프트웨어공학부,
                                                        일어일문학, LBC,
                                                        필름소피,
                                                        <br />
                                                        덕불, KimKim, 두들링,
                                                        덕냥당, 돌멩돌맹
                                                    </>
                                                ) : (
                                                    "총학생회 문화기획국, 바이오공학, 운지문학회, 디지털소프트웨어공학부, 일어일문학, LBC, 필름소피, 덕불, KimKim, 두들링, 덕냥당, 돌멩돌맹"
                                                )
                                            }
                                            imagePaths={imagePaths}
                                            setImage={setMapImg}
                                            applyBrTags={applyBrTags}
                                        />
                                        <ExpandableContent
                                            showMoreText="5월 24일 금요일 - 밤 부스"
                                            showLessText="3일차"
                                            a={
                                                applyBrTags ? (
                                                    <>
                                                        현장실습지원센터,
                                                        사회봉사/학생지원과
                                                    </>
                                                ) : (
                                                    "현장실습지원센터, 사회봉사/학생지원과"
                                                )
                                            }
                                            b={
                                                applyBrTags ? (
                                                    <>총학생회, 운현방송국</>
                                                ) : (
                                                    "총학생회, 운현방송국"
                                                )
                                            }
                                            c={
                                                applyBrTags ? (
                                                    <>
                                                        원데이 클래스,
                                                        서울베스트내과의원,
                                                        <br />
                                                        시원스쿨, 귀요미 잡화점,
                                                        Dearest, Atractivo,
                                                        <br />
                                                        덕새 털-업, 폭닥폭닥
                                                    </>
                                                ) : (
                                                    "원데이 클래스, 서울베스트내과의원, 시원스쿨, 귀요미 잡화점, Dearest, Atractivo, 덕새 털-업, 폭닥폭닥"
                                                )
                                            }
                                            d={
                                                applyBrTags ? (
                                                    <>
                                                        빛내미, 과학기술대학,
                                                        화학,
                                                        <br />
                                                        자세히생각하라XRADIUS,
                                                        한빛
                                                    </>
                                                ) : (
                                                    "빛내미, 과학기술대학, 화학, 자세히생각하라XRADIUS, 한빛"
                                                )
                                            }
                                            e={
                                                applyBrTags ? (
                                                    <>
                                                        수학, 도담도담,
                                                        운현극예술연구회, 이오,
                                                        열음, LBC, <br />
                                                        행운 하나 들고가세요~!,
                                                        KimKim, 오묘한 상점,
                                                        꽃신을 신고, 뜨개뜨개
                                                    </>
                                                ) : (
                                                    "수학, 도담도담, 운현극예술연구회, 이오, 열음, LBC, 행운 하나 들고가세요~!, KimKim, 오묘한 상점, 꽃신을 신고, 뜨개뜨개"
                                                )
                                            }
                                            imagePaths={imagePaths}
                                            setImage={setMapImg}
                                            applyBrTags={applyBrTags}
                                        />
                                    </Mp.Infobox>
                                </Mp.MapInfo>
                            </Mp.Map>
                            <Footer />
                        </C.Phone>
                    </Mp.Background>
                </C.Area>
            </C.Page>
        </>
    );
}

export default Map;
