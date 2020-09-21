import { AfterViewInit, Component, OnInit, ViewChild, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-quill-editor',
    templateUrl: './quill-editor.component.html',
    styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent implements OnInit, AfterViewInit , OnChanges {
    @ViewChild('quillQuestion', { static: true }) quillQuestion;
    @Input() content: any;
    @Output() onSaveContent = new EventEmitter();
    contentForm: FormGroup;
    quillConfig = {
        toolbar: {
            container: [
                ['bold', 'italic', 'underline'],
                [{ 'script': 'sub' }, { 'script': 'super' }],
            ],
        },
    };

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.createForm();
    }

    ngOnChanges() {
        if (this.contentForm) {            
            this.contentForm.controls['content'].setValue(this.content);
        }
    }

    ngAfterViewInit(): void {
        this.quillConfig = {
            toolbar: {
                container: [
                    ['bold', 'italic', 'underline'],
                    [{ 'script': 'sub' }, { 'script': 'super' }],
                ],
            },
        };
    }

    createForm() {
        this.contentForm = this.formBuilder.group({
            content: ['', Validators.maxLength(150)]
        });
    }

    get contents() {
        return this.contentForm.controls['content'];
    } 

    /**
     * Save quill editor text
     */
    onSave() {
       this.onSaveContent.emit(this.contentForm.value);
    }
    /**
     * Reset quill editor text
     */
    reset() {
        this.quillQuestion.quillEditor.setContents([{ insert: '\n' }]);
    }

}
