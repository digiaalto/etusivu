import styles from "../styles/FormApp.module.sass"
import React, { useState, useContext, createContext } from "react"
import TextareaAutosize from "react-textarea-autosize"
import Select from "react-select"
import { AiOutlineEnter } from "react-icons/ai"
import { MdTimer } from "react-icons/md"
import { GiMale, GiFemale } from "react-icons/gi"
import { GrPrevious, GrFormCheckmark } from "react-icons/gr"
import { useRouter } from "next/router"

import FunctionButton from "../components/utility/FunctionButton"
import LoadingBar from "../components/utility/LoadingBar"
import Fader from "./utility/Fader"
import Slider from "./utility/Slider"

const FunctionsCtx = createContext(null)

const ageOptions = [
  {
    label: "En tiedä / ei väliä",
    value: "En tiedä / ei väliä",
    hotkey: "a",
  },
  {
    label: "17 tai nuorempi",
    value: "17 tai nuorempi",
    hotkey: "b",
  },
  {
    label: "18-24",
    value: "18-24",
    hotkey: "c",
  },
  {
    label: "25-36",
    value: "25-36",
    hotkey: "d",
  },
  {
    label: "37-48",
    value: "37-48",
    hotkey: "e",
  },
  {
    label: "49-59",
    value: "49-59",
    hotkey: "f",
  },
  {
    label: "60-70",
    value: "60-70",
    hotkey: "g",
  },
  {
    label: "70 tai vanhempi",
    value: "70 tai vanhempi",
    hotkey: "h",
  },
]
const moneyOptions = [
  {
    label: "En tiedä / ei väliä",
    value: "En tiedä / ei väliä",
    hotkey: "a",
  },
  {
    label: "alle 10,000€",
    value: "alle 10,000€",
    hotkey: "b",
  },
  {
    label: "10,000€ - 25,000€",
    value: "10,000€ - 25,000€",
    hotkey: "c",
  },
  {
    label: "35,000€ - 50,000€",
    value: "35,000€ - 50,000€",
    hotkey: "d",
  },
  {
    label: "50,000€ - 75,000€",
    value: "50,000€ - 75,000€",
    hotkey: "e",
  },
  {
    label: "75,000€ - 100,000€",
    value: "75,000€ - 100,000€",
    hotkey: "f",
  },
  {
    label: "yli 100,000€",
    value: "yli 100,000€",
    hotkey: "g",
  },
]
const lisapalveluOptions = [
  {
    label: "Kyllä",
    value: "Kyllä",
    hotkey: "a",
  },
  {
    label: "En",
    value: "En",
    hotkey: "b",
  },
  {
    label: "Mahdollisesti",
    value: "Mahdollisesti",
    hotkey: "c",
  },
]
const NetlifyForm = () => {
  const [inProp, setInProp] = useState(true) // Controls the question element transition stages.
  const [index, setIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(0)
  const [editorEnabled, setEditorEnabled] = useState(false)
  const [errors, setFormErrors] = useState([])
  const [formData, setFormData] = useState({
    yritysNimi: {
      name: "yritysNimi",
      error: "Yritysnimi on pakollinen kenttä.",
      value: "",
      required: true,
    },
    toimiala: {
      name: "toimiala",
      error: "Toimiala on pakollinen kenttä.",
      value: "",
      required: true,
    },
    kilpailijat: {
      name: "kilpailijat",
      value: "",
      required: false,
    },
    ydinosaaminen: {
      name: "ydinosaaminen",
      error: "Yrityksen ydinosaaminen on pakollinen kenttä.",
      value: "",
      required: true,
    },
    brandiKuvaus: {
      name: "brandiKuvaus",
      error: "Brändikuvaus on pakollinen kenttä.",
      value: "",
      required: true,
    },
    brandiResurssit: {
      name: "brandiResurssit",
      value: "",
      required: false,
    },
    kohderyhmaIka: {
      name: "kohderyhmaIka",
      error: "Kohderyhmän ikä on pakollinen valinta.",
      value: "",
      required: true,
    },
    kohderyhmaTulot: {
      name: "kohderyhmaTulot",
      error: "Kohderyhmän tulot on pakollinen valinta.",
      value: "",
      required: true,
    },
    kohderyhmaSukupuoli: {
      name: "kohderyhmaSukupuoli",
      value: [50],
      required: false,
    },
    kohderyhmaKuvaus: {
      name: "kohderyhmaKuvaus",
      error: "Kohderyhmän kuvaus on pakollinen kenttä.",
      value: "",
      required: true,
    },
    kohderyhmaKuvausPositiivinen: {
      name: "kohderyhmaKuvausPositiivinen",
      error: "Kohderyhmän kuvaus on pakollinen kenttä.",
      value: "",
      required: true,
    },
    kohderyhmaKuvausNegatiivinen: {
      name: "kohderyhmaKuvausNegatiivinen",
      error: "Kohderyhmän kuvaus on pakollinen kenttä.",
      value: "",
      required: true,
    },
    verkkosivuKuvaus: {
      name: "verkkosivuKuvaus",
      error: "Verkkosivun kuvaus on pakollinen kenttä.",
      value: "",
      required: true,
    },
    verkkosivuTavoite: {
      name: "verkkosivuTavoite",
      error: "Verkkosivun tavoite on pakollinen kenttä.",
      value: "",
      required: true,
    },
    verkkosivuPalvelut: {
      name: "verkkosivuPalvelut",
      error: "Verkkosivun palvelut on pakollinen kenttä.",
      value: "",
      required: true,
    },
    digiaaltoLisapalvelu: {
      name: "digiaaltoLisapalvelu",
      value: "",
      required: false,
    },
    etunimi: {
      name: "etunimi",
      error: "Etunimi pakollinen kenttä.",
      value: "",
      required: true,
    },
    sukunimi: {
      name: "sukunimi",
      error: "Sukunimi on pakollinen kenttä.",
      value: "",
      required: true,
    },
    rooli: {
      name: "rooli",
      error: "Rooli on pakollinen kenttä.",
      value: "",
      required: true,
    },
    sahkoposti: {
      name: "sahkoposti",
      error: "Sähköposti on pakollinen kenttä.",
      value: "",
      required: true,
    },
    puhelinnumero: {
      name: "puhelinnumero",
      error: "Puhelinnumero on pakollinen kenttä.",
      value: "",
      required: true,
    },
    lisapalvelu: {
      name: "lisapalvelu",
      value: "",
      required: true,
    },
  })
  const router = useRouter()

  // For submitting forms to Netlify
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }

  const onInputChange = (e, selection) => {
    if (selection) {
      updateField(selection, e.value)
    } else {
      e.preventDefault()
      const name = e.target.name
      const newValue = e.target.value
      updateField(name, newValue)
    }
  }

  const sliderChange = (props) => {
    const { name, values } = props
    setFormData({ ...formData, [name]: { ...formData[name], value: values } })
  }

  const submitForm = (e) => {
    e.preventDefault()

    const errors = []
    const keys = Object.keys(formData)
    let dataObject = {}
    let i

    for (i = 0; i < keys.length; i++) {
      const element = formData[keys[i]]
      dataObject[element.name] = element.value
      const required = element.required
      const valid = element.value && element.value.length > 0
      if (required && !valid) {
        errors.push(element.error)
      }
    }

    if (errors.length > 0) {
      setFormErrors(errors)
    }

    const valid = errors.length === 0
    const body = encode({
      "form-name": "haastattelulomake",
      ...dataObject,
    })

    if (valid) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body,
      })
        .then(() => {
          router.push("/kiitos")
          // alert("success?")
        })
        .catch((error) => console.log(error))
    }
  }

  const changeQuestion = (direction) => {
    switch (direction) {
      case "prev":
        setNextIndex(index - 1)
        break
      default:
        setNextIndex(index + 1)
        break
    }
    setInProp(false)
  }

  const updateField = (fieldName, newValue) => {
    setFormData({
      ...formData,
      [fieldName]: { ...formData[fieldName], value: newValue },
    })
  }

  const onInputKeyDown = (e, allowNexting, enableLineBreak) => {
    const isEnter = e.key === "Enter"
    const isAlt = e.key === "Alt"
    const isTextarea = e.target.nodeName.toLowerCase() === "textarea"

    if (isEnter && isTextarea && enableLineBreak) {
      // Add linebreak to textarea.
      e.preventDefault()
      updateField(e.target.name, e.target.value + "\n")
    } else if (isEnter && isTextarea && allowNexting) {
      // Change question with Enter.
      e.preventDefault()
      changeQuestion("next")
    } else if (isEnter || isAlt) {
      // Sometimes enter submits and Alt unfocuses, disable event.
      e.preventDefault()
    }
  }

  function isInputValid(name) {
    const data = formData[name]
    console.log(`isInputValid: ${name}, data; ${data}`)
    console.log(`errors: ${errors}`)
    return (
      errors.length === 0 ||
      (data.required && data.value.length > 0) ||
      !data.required
    )
  }

  /**
   * Question elements which appear in the form.
   */
  const elements = [
    <StartScreen />,
    <SecondScreen />,
    <Question label="Aloitetaan etunimestäsi." data={formData.etunimi} />,
    <Question label="Ja sukunimi." data={formData.sukunimi} />,
    <Question
      label={`Hei, ${formData.etunimi.value}. Mikä rooli sinulla on yrityksessäsi?`}
      data={formData.rooli}
    />,
    <Question
      label="Mistä sähköpostiosoitteesta sinut saa parhaiten kiinni?"
      data={formData.sahkoposti}
    />,
    <Question
      label="Ja viimeiseksi puhelinnumero."
      data={formData.puhelinnumero}
    />,
    <Intermission
      header="Seuraavaksi yrityksesi perustiedoista."
      subheader="Alapalkista näet kuinka pitkälle olet edennyt kyselyssä."
    />,
    <Question
      label="Mikä on yrityksesi nimi?"
      subLabel="Anna myös vanha nettiosoite jos sellainen on."
      data={formData.yritysNimi}
    />,
    <Question label="Yrityksesi toimiala?" data={formData.toimiala} />,
    <Question
      label="Yrityksesi kovimmat kilpailijat?"
      subLabel="Ilmoita myös heidän verkkosivut."
      data={formData.kilpailijat}
      enableLineBreak
    />,
    <Question
      label="Entäs, miten kuvailisit yrityksesi ydinosaamista?"
      subLabel="Eli miten erotut kilpailijoistasi ja mihin kilpailukykysi perustuu."
      data={formData.ydinosaaminen}
      enableLineBreak
    />,
    <Intermission
      header="Muutama kysymys tavaramerkistä."
      subheader="Tavaramerkki, eli brändi on mielikuva yrityksestä, joka syntyy tarkoituksella tai vahingossa."
    />,
    <Question
      label="Kuvaile yrityksesi brändiä vapaamuotoisesti."
      subLabel="Jos sitä ei ole vielä kehitetty, kirjoita 3-5 sanaa jotka kuvaavat yritystäsi."
      data={formData.brandiKuvaus}
      enableLineBreak
    />,
    <Question
      label="Mitä brändiresursseja sinulla on olemassa?"
      subLabel="Kuten fonttia, logoa, väriteemaa, tms."
      data={formData.brandiResurssit}
      enableLineBreak
    />,
    <Intermission
      header="Seuraavaksi kartoitetaan kohderyhmää."
      subheader="Muista, antamasi vastaukset tehostavat suunnittelun vaikuttavuutta."
    />,
    <Selection
      label="Arvioi kohderyhmän keskeisin ikähaarukka."
      data={formData.kohderyhmaIka}
      options={ageOptions}
    />,
    <Selection
      label="Valitse kohderyhmän keskimääräinen tulo 12 kuukaudelta."
      data={formData.kohderyhmaTulot}
      options={moneyOptions}
    />,
    <RangeQuestion
      label="Arvioi kohderyhmäsi sukupuolijakauma."
      subLabel="Jätä liukusäädin 50% jos tällä ei ole merkitystä."
      data={formData.kohderyhmaSukupuoli}
      onChange={sliderChange}
    />,
    <Question
      label="Kuvaile kohderyhmääsi omin sanoin."
      data={formData.kohderyhmaKuvaus}
      enableLineBreak
    />,
    <Question
      label="Kuvittele unelma-asiakastasi."
      subLabel="Mikä on hänelle tärkeintä? Mitä hän odottaa sinulta?"
      data={formData.kohderyhmaKuvausPositiivinen}
      enableLineBreak
    />,
    <Question
      label="Jatka unelma-asiakkaasi kuvittelua."
      subLabel="Mitä hän pelkää? Mitä negatiivisia kokemuksia hänellä on toimialastasi?"
      data={formData.kohderyhmaKuvausNegatiivinen}
      enableLineBreak
    />,
    <Intermission
      header="Kiitos paljon vastauksista."
      subheader="Viimeiseksi vähän kotisivusta itsestään."
    />,
    <Question
      label="Kuvaile omin sanoin millaisen kotisivun haluat."
      subLabel="Aloita tyypistä. Puhutaanko verkkokaupasta, blogista, markkinointisivusta, web-appista, tms."
      data={formData.verkkosivuKuvaus}
      enableLineBreak
    />,
    <Question
      label="Listaa yrityssivusi tärkeimmät tavoitteet."
      subLabel="Koita olla spesifinen, mutta toiveikas."
      data={formData.verkkosivuTavoite}
      enableLineBreak
    />,
    <Selection
      label="Oletko kiinnostunut Digiaallon lisäpalvelusta?"
      subLabel="Palveluun kuuluu sisällönhallinta, päivitykset, muut pienet muutostyöt."
      data={formData.lisapalvelu}
      options={lisapalveluOptions}
    />,
    <Question
      label="Omistatko jo muita palveluita, mitä mielestäsi tarvitset?"
      subLabel="Esimerkiksi domainin, palvelimen, yrityssähköpostin, tms."
      data={formData.verkkosivuPalvelut}
      enableLineBreak
    />,
  ]

  function updateQuestion() {
    if (nextIndex >= elements.length) {
      setEditorEnabled(true)
    } else {
      setIndex(nextIndex)
      setInProp(true)
    }
  }

  let percentCompleted = (index / elements.length) * 100
  if (index + 1 === elements.length) percentCompleted = 100

  return (
    <form
      name="haastattelulomake"
      data-netlify="true"
      action="/kiitos"
      onSubmit={(e) => submitForm(e)}
      className={styles.netlifyForm}
    >
      <FunctionsCtx.Provider
        value={{
          onInputChange: onInputChange,
          changeQuestion: changeQuestion,
          onInputKeyDown: onInputKeyDown,
          isInputValid: isInputValid,
          editorEnabled: editorEnabled,
          questionIndex: index,
        }}
      >
        {editorEnabled ? (
          <FinalEditor elements={elements} errors={errors} />
        ) : (
          <>
            <Fader inProp={inProp} exitedCallback={updateQuestion}>
              <div key={`element-${index}`}>{elements[index]}</div>
            </Fader>
            <input name="filler" style={{ visibility: "hidden" }} hidden />
            <LoadingBar percent={percentCompleted} />
          </>
        )}
      </FunctionsCtx.Provider>
    </form>
  )
}

const StartScreen = () => {
  const { editorEnabled, changeQuestion } = useContext(FunctionsCtx)
  if (editorEnabled) return null

  return (
    <Element className={styles.finalEditor}>
      <span className={styles.header}>
        Kiitos, että olet kiinnostunut käyttäjäystävällisistä verkkosivuista.
      </span>
      <p className={styles.subheader}>
        Lähtölaukaise kotisivun tilausprosessi täyttämällä interaktiivinen
        haastattelulomake. Muut kysyttävät ja tiedustelut onnistuvat parhaiten
        sähköpostilla tai soittamalla arkipäivisin.
      </p>
      <div className={styles.buttonRow}>
        <FunctionButton
          text={"Aloita haastattelu"}
          name="next"
          onClick={(e) => {
            changeQuestion("next")
          }}
        />
      </div>
    </Element>
  )
}

const SecondScreen = () => {
  const { changeQuestion } = useContext(FunctionsCtx)
  return (
    <React.Fragment>
      <Element className={styles.finalEditor}>
        <Headers
          header={"Nopeuta kotisivun hankintaa kätevästi."}
          subheader={`Haastatteluun sisältyy kysymyksiä sinusta, yrityksestä ja brändistä, kohderyhmästä ja haluamastasi nettisivusta.`}
        />
        <div className={styles.intermissionButtons}>
          <FunctionButton
            text={"Ok"}
            name="next"
            onClick={(e) => {
              e.currentTarget.blur()
              changeQuestion("next")
            }}
            icon={<GrFormCheckmark />}
          />
        </div>
        <div className={styles.helpContainer}>
          <MdTimer className={styles.helpIcon} />
          <p className={styles.help}>Kesto 15+ minuuttia.</p>
        </div>
      </Element>
    </React.Fragment>
  )
}

/**
 * A Custom Range Slider.
 */
const RangeQuestion = (props) => {
  const { label, subLabel, data, onChange } = props
  const { name, value, required } = data
  return (
    <Element>
      <QuestionLabel
        label={label}
        subLabel={subLabel}
        required={required}
        center={true}
      />
      <div className={styles.rangeContainer}>
        <div className={styles.rangeIcon}>
          <GiFemale />
        </div>
        <div className={styles.range}>
          <Slider name={name} values={value} onChange={onChange} />
        </div>
        <div className={styles.rangeIcon}>
          <GiMale />
        </div>
      </div>
      <Buttons disabled={false} icon={<GrFormCheckmark />} center={true} />
    </Element>
  )
}

/**
 * An element which allows selection from pre-defined items.
 */
const Selection = (props) => {
  const { label, subLabel, data, options } = props
  const { onInputChange, editorEnabled } = useContext(FunctionsCtx)
  const { name, value, required } = data
  const hasValue = value && value.length > 0
  const buttonDisabled = required && !hasValue

  return (
    <Element>
      <QuestionLabel label={label} subLabel={subLabel} optional />
      <Select
        value={{ label: value, value: value }}
        instanceId={name}
        options={options}
        onChange={(e) => onInputChange(e, name)}
        autoFocus={!editorEnabled}
      />
      <Buttons disabled={buttonDisabled} icon={<GrFormCheckmark />} />
    </Element>
  )
}

export default NetlifyForm

/**
 * Simplest question, uses TextareaAutosize in place of regular input field.
 */
const Question = (props) => {
  const {
    label,
    subLabel,
    data,
    buttonText,
    placeholder = "Kirjoita vastaus tähän...",
    enableLineBreak = false,
  } = props
  const { name, value, required } = data // from queston object
  const {
    onInputChange,
    onInputKeyDown,
    editorEnabled,
    isInputValid,
  } = useContext(FunctionsCtx)

  const isValid = isInputValid(name)
  const hasValue = value && value.length > 0
  const buttonDisabled = required && !hasValue
  const allowNexting = !required || hasValue

  return (
    <Element>
      <QuestionLabel label={label} subLabel={subLabel} required={required} />
      <TextareaAutosize
        maxRows={10}
        type="text"
        name={name}
        value={value}
        onChange={onInputChange}
        onKeyDown={(e) => onInputKeyDown(e, allowNexting, enableLineBreak)}
        autoFocus={!editorEnabled}
        placeholder={placeholder}
        className={`${styles.textInput} ${
          isValid ? null : styles.textInputInvalid
        }`}
      />
      <Buttons
        buttonText={buttonText}
        icon={<GrFormCheckmark />}
        disabled={buttonDisabled}
        enableLineBreak={enableLineBreak}
        enableEnterGuide={!enableLineBreak}
      />
    </Element>
  )
}

/**
 * An element that doesn't ask a question. A kind of break for the user filling the form.
 */
const Intermission = (props) => {
  const { changeQuestion, editorEnabled } = useContext(FunctionsCtx)
  if (editorEnabled) return null
  const { header, subheader, buttonText = "Ok" } = props

  return (
    <Element className={styles.finalEditor}>
      <Headers header={header} subheader={subheader} />
      <div className={styles.intermissionButtons}>
        <FunctionButton
          text={buttonText}
          name="next"
          onClick={(e) => {
            e.currentTarget.blur()
            changeQuestion("next")
          }}
          icon={<GrFormCheckmark />}
        />
      </div>
    </Element>
  )
}

const FinalEditor = (props) => {
  const { elements, errors } = props
  return (
    <div className={styles.finalEditor}>
      <Element>
        <div className={styles.editorHeaderContainer}>
          <span className={styles.editorHeader}>
            Voit muuttaa antamasia vastauksia vielä ennen lähetystä.
          </span>
        </div>
      </Element>
      <input type="hidden" name="form-name" value="haastattelulomake" />
      {elements.map((section, index) => (
        <div className={styles.finalEditorSection} key={`section-${index}`}>
          {section}
        </div>
      ))}
      <div className={styles.buttons}>
        <FunctionButton type="submit" text="Lähetä" disabled={false} />
      </div>
      {errors.length > 0 ? (
        <div className={styles.errors}>
          {errors.map((err, index) => (
            <p key={`error-${index}`}>{err}</p>
          ))}
        </div>
      ) : null}
    </div>
  )
}

const PreviousButton = () => {
  const { changeQuestion } = useContext(FunctionsCtx)
  return (
    <div className={styles.previousButtonWrapper}>
      <button
        onClick={() => changeQuestion("prev")}
        className={styles.previousButton}
        type="button"
        tabIndex={-1}
      >
        <GrPrevious className={styles.prevBtnIcon} />{" "}
        <span className={styles.prevBtnText}>Takaisin</span>
      </button>
    </div>
  )
}

const Buttons = (props) => {
  const { changeQuestion, editorEnabled } = useContext(FunctionsCtx)
  if (editorEnabled) return null

  const {
    text,
    icon,
    enableLineBreak,
    enableEnterGuide,
    center,
    disabled,
  } = props

  return (
    <div className={styles.buttons}>
      {enableLineBreak && (
        <span className={`${styles.enterGuide}`}>
          Enter <AiOutlineEnter />
          <span className={styles.guideText}> tekee rivinvaihdon</span>
        </span>
      )}
      <div
        className={styles.buttonRow}
        style={center && { justifyContent: "center" }}
      >
        <FunctionButton
          text={text}
          name="next"
          onClick={(e) => {
            changeQuestion("next")
          }}
          disabled={disabled}
          icon={icon}
        />
        {enableEnterGuide && !disabled && (
          <span className={`${styles.enterGuide} ${styles.animatedEnterGuide}`}>
            Enter <AiOutlineEnter />
          </span>
        )}
      </div>
    </div>
  )
}

const QuestionLabel = (props) => {
  const { label, subLabel, center, required } = props

  return (
    <div
      className={styles.labelContainer}
      style={center && { textAlign: "center" }}
    >
      <label className={styles.label}>
        {label}
        {required && " *"}
      </label>
      {subLabel && <span className={styles.subLabel}>{subLabel}</span>}
    </div>
  )
}

const Headers = (props) => {
  const { header, subheader } = props

  return (
    <div>
      <span
        className={styles.header}
        style={subheader ? null : { marginBottom: "0" }}
      >
        {header}
      </span>
      {subheader && <p className={styles.subheader}>{subheader}</p>}
    </div>
  )
}

const Element = (props) => {
  const { children } = props
  const { questionIndex } = useContext(FunctionsCtx)
  return (
    <div className={styles.element}>
      {questionIndex > 0 && <PreviousButton />} {children}
    </div>
  )
}
