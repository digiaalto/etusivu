import styles from "./Accordion.module.sass"
import AccordionItem from "./AccordionItem"

const Accordion = (props) => {
  const { items } = props
  return (
    <div className={styles.accordion}>
      {items.map((item) => (
        <AccordionItem
          button={item.button}
          content={item.content}
          key={`accordionItem-${item.button}`}
        />
      ))}
    </div>
  )
}

export default Accordion
