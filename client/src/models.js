export class Modal{
    title = null;
    contentView = null;
    triggerButtonId = null;
    formId = null;
    buttons = [];

    setTitle(title){
        this.title = title;
        return this;
    }

    setContentView(contentView){
        this.contentView = contentView;
        return this;
    }

    setTriggerButtonId(buttonId){
        this.triggerButtonId = buttonId;
        return this;
    }

    setFormId(formId){
        this.formId = formId;
        return this;
    }

    addButton(text, id, classes, role = ''){
        this.buttons.push({
            text: text,
            id: id,
            classes: classes,
            role: role
        });

        return this;
    }
}