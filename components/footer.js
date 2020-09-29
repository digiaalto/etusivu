import Socials from "../utils/socials"

const Footer = () => {
	return (
		<footer className="footer">
			<div className="contentWrapper">
				<div className="titleWrapper">
					<h3 className="logo">Digiaalto</h3>
					<h4 className="header-info">Yhteystiedot</h4>
				</div>
				<div className="contactWrapper">
					<Socials />
					<div className="contact-item email">
						<a href="mailto:hei@digiaalto.fi">hei@digiaalto.fi</a>
					</div>
					<div className="contact-item tel">
						<a href="tel:0505543395">050 5543395</a>
					</div>
				</div>
				<div className="copyrightWrapper">
					<span className="cp-symbol">©</span>
					<span>digiaalto.fi</span>
				</div>
			</div>
			<style jsx>
				{`
					footer {
						border-top: 1px solid #ccc;
					}

					.contentWrapper {
						padding: 4rem 5vw;
					}

					.contactWrapper {
						margin: 1rem auto;
					}

					.copyrightWrapper {
						opacity: 50%;
					}

					.cp-symbol {
						margin-right: 0.5rem;
					}
				`}
			</style>
		</footer>
	)
}

export default Footer
