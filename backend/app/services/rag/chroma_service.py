import chromadb
from sentence_transformers import SentenceTransformer

client = chromadb.PersistentClient(path="chroma_db")

collection = client.get_or_create_collection(
    name="contracts"
)

model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)


def store_contract(contract_id: int, text: str):

    embedding = model.encode(text).tolist()

    collection.add(
        ids=[str(contract_id)],
        embeddings=[embedding],
        documents=[text],
    )


def search_contract(question: str):

    embedding = model.encode(question).tolist()

    result = collection.query(
        query_embeddings=[embedding],
        n_results=1,
    )

    return result["documents"][0][0]