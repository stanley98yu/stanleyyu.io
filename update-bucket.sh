#!/bin/bash
gsutil rsync -r src gs://${BUCKET_NAME}
