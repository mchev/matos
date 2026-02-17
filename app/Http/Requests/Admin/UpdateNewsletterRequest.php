<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UpdateNewsletterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'subject' => ['required', 'string', 'max:255'],
            'body_html' => ['required', 'string'],
        ];
    }

    public function messages(): array
    {
        return [
            'subject.required' => 'Le sujet est requis.',
            'subject.max' => 'Le sujet ne peut pas dépasser 255 caractères.',
            'body_html.required' => 'Le contenu est requis.',
        ];
    }
}
