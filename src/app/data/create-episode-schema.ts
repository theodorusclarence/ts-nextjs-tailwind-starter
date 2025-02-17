export default {
    "properties": {
      "podcast_id": {
        "type": "string",
        "format": "uuid",
        "title": "Podcast Id"
      },
      "title": {
        "anyOf": [
          {
            "type": "string",
            "maxLength": 200
          },
          {
            "type": "null"
          }
        ],
        "title": "Title"
      },
      "description": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ],
        "title": "Description"
      },
      "transcript": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ],
        "title": "Transcript"
      },
      "duration": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ],
        "title": "Duration"
      },
      "language": {
        "type": "string",
        "maxLength": 10,
        "title": "Language",
        "default": "en"
      },
      "tone": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ],
        "title": "Tone"
      },
      "style": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ],
        "title": "Style"
      },
      "background_music_url": {
        "anyOf": [
          {
            "type": "string",
            "maxLength": 2083,
            "minLength": 1,
            "format": "uri"
          },
          {
            "type": "null"
          }
        ],
        "title": "Background Music Url"
      },
      "sources": {
        "anyOf": [
          {
            "items": {
              "properties": {
                "url": {
                  "type": "string",
                  "maxLength": 2083,
                  "title": "Url"
                },
                "source_type": {
                  "type": "string",
                  "maxLength": 100,
                  "title": "Source Type"
                }
              },
              "type": "object",
              "required": [
                "url",
                "source_type"
              ],
              "title": "BaseSource"
            },
            "type": "array"
          },
          {
            "type": "null"
          }
        ],
        "title": "Sources"
      },
      "id": {
        "anyOf": [
          {
            "type": "string",
            "format": "uuid"
          },
          {
            "type": "null"
          }
        ],
        "title": "Id"
      },
      "publication_date": {
        "anyOf": [
          {
            "type": "object"
          },
          {
            "type": "null"
          }
        ],
        "title": "Publication Date"
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "title": "Created At"
      },
      "podcast_audio_url": {
        "anyOf": [
          {
            "type": "string",
            "maxLength": 2083,
            "minLength": 1,
            "format": "uri"
          },
          {
            "type": "null"
          }
        ],
        "title": "Podcast Audio Url"
      },
      "speech_audio_url": {
        "anyOf": [
          {
            "type": "string",
            "maxLength": 2083,
            "minLength": 1,
            "format": "uri"
          },
          {
            "type": "null"
          }
        ],
        "title": "Speech Audio Url"
      }
    },
    "type": "object",
    "required": [
      "podcast_id",
      "title"
    ],
    "title": "Episode"
}