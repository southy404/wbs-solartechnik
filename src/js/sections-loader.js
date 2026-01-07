

document.addEventListener("DOMContentLoaded", () => {
     const sectionsConfig = [
        {
            containerId: "experience-stats-container",
            filePath: "src/sections/04_experience_stats.html"
        }
        // Add more sections here as needed !

    ];


    const loadSection = async (id, path) => {
        const el = document.getElementById(id);

         el.innerHTML = await (await fetch(path)).text();

         el.dispatchEvent(new CustomEvent("sectionLoaded", {
            bubbles: true,
            detail: { id, path }
        }));
    };


    async function loadAllSections() {
        const loadPromises = sectionsConfig.map(({ containerId, filePath }) =>
            loadSection(containerId, filePath)
        );

        await Promise.all(loadPromises);
    }

     loadAllSections();
});