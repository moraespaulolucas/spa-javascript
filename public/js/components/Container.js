const StyledText = `
        color: red;
        font-weight: bold;
    `;

export default function Text() {
	return `
        <p styled={${StyledText}}>Texto</p>
    `;
}
